/// <reference types="google.maps" />

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ICONS } from 'src/app/constants/constants';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
})
export class GooglemapComponent implements OnChanges {
  @Input() newDestination!: string;
  @Input() startLocation!: string;
  @Input() radius: number | null = 1;
  @Input() navigationSteps: number = 1;
  @Input() locationToAdd!: google.maps.places.PlaceResult | null;
  @Input() locationToRemove!: google.maps.places.PlaceResult | null;
  @Output() destinationAdded = new EventEmitter<string>();
  @Output() timeToArrive = new EventEmitter<number>();
  @Output() routeRendered = new EventEmitter<{
    distance: number;
    duration: number;
    waypoints: number;
  }>();
  @Output() markerSelected = new EventEmitter<google.maps.places.PlaceResult>();
  previousSelectedMarker: google.maps.Marker | null = null;
  currentSelectedMarker: google.maps.Marker | null = null;
  nearbyPlaces: google.maps.places.PlaceResult[] = [];
  allMarkers: google.maps.Marker[] = [];
  mapOptions: google.maps.MapOptions = {
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#212121' }] },
      { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#212121' }] },
      {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [{ color: '#757575' }],
      },
      {
        featureType: 'administrative.country',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9e9e9e' }],
      },
      {
        featureType: 'administrative.land_parcel',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#bdbdbd' }],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#757575' }],
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#181818' }],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#616161' }],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#1b1b1b' }],
      },
      {
        featureType: 'road',
        elementType: 'geometry.fill',
        stylers: [{ color: '#2c2c2c' }],
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#8a8a8a' }],
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{ color: '#373737' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#3c3c3c' }],
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry',
        stylers: [{ color: '#4e4e4e' }],
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#616161' }],
      },
      {
        featureType: 'transit',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#757575' }],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#000000' }],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#3d3d3d' }],
      },
    ],

    mapTypeControl: false,
    disableDefaultUI: true, // Disable default UI
    zoomControl: true, // Enable zoom control
  };
  isRefetchNearbyPlaces: boolean = true;
  currentPolygon: google.maps.Polygon | null = null;
  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom = 5;
  drawingManager!: google.maps.drawing.DrawingManager;
  map!: google.maps.Map;
  vertices: google.maps.LatLngLiteral[] = [];
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  placesService!: google.maps.places.PlacesService;

  currentLocation!: google.maps.LatLngLiteral;
  destination: string = '';
  waypoints: string[] = [];
  waypointsLatLong: google.maps.LatLng[] = [];
  @ViewChild(GoogleMap) googleMap!: GoogleMap;

  ngOnInit(): void {
    this.getUserLocation();
  }

  ngAfterViewInit(): void {
    this.initializeDirectionsRenderer();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['newDestination'] && changes['newDestination'].currentValue) {
      this.addDestinationFromParent(changes['newDestination'].currentValue);
    }
    if (changes['startLocation'] && changes['startLocation'].currentValue) {
      this.startLocation = changes['startLocation'].currentValue;
    }
    if (changes['radius'] && changes['radius'].currentValue) {
      this.radius = changes['radius'].currentValue;
      this.calculateAndDisplayRoute();
    }
    if (changes['locationToAdd'] && changes['locationToAdd'].currentValue) {
      this.previousSelectedMarker = null;
      this.isRefetchNearbyPlaces = false;
      this.currentSelectedMarker?.setIcon(ICONS.restu);
      const locationExists = this.waypointsLatLong.filter((item) =>
        item.equals(changes['locationToAdd'].currentValue.geometry.location),
      );
      if (locationExists) {
        this.waypointsLatLong.push(
          changes['locationToAdd'].currentValue.geometry.location,
        );
        this.calculateAndDisplayRoute();
      }
    }
    if (
      changes['locationToRemove'] &&
      changes['locationToRemove'].currentValue
    ) {
      this.isRefetchNearbyPlaces = false;
      this.previousSelectedMarker = null;
      let flag = false;
      this.allMarkers.forEach((item) => {
        if (
          item
            .getPosition()
            ?.equals(changes['locationToRemove'].currentValue.geometry.location)
        ) {
          flag = true;
          item.setIcon(ICONS.restu2);
        }
      });
      if (!flag) {
        this.waypointsLatLong = this.waypointsLatLong.filter(
          (item) =>
            !item.equals(
              changes['locationToRemove'].currentValue.geometry.location,
            ),
        );
        this.calculateAndDisplayRoute();
      }
    }
  }

  initializeDirectionsRenderer(): void {
    if (this.googleMap && this.googleMap.googleMap) {
      this.directionsRenderer.setMap(this.googleMap.googleMap!);
      this.placesService = new google.maps.places.PlacesService(this.map);
    }
  }

  onMapInitialized(map: google.maps.Map): void {
    this.map = map;
    this.initializeDrawingManager();
  }

  getUserLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.map.setCenter(this.currentLocation);
        this.map.setZoom(15);
        this.addCurrentLocationMarker(this.currentLocation);
      });
    } else {
      window.alert('Geolocation is not supported by this browser.');
    }
  }

  addCurrentLocationMarker(position: google.maps.LatLngLiteral): void {
    if (this.googleMap && this.googleMap.googleMap) {
      new google.maps.Circle({
        strokeColor: '#4285F4',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#4285F4',
        fillOpacity: 0.35,
        map: this.googleMap.googleMap,
        center: position,
        radius: 100,
      });
      new google.maps.Marker({
        position,
        map: this.googleMap.googleMap,
        title: 'Your Location',
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 6,
          fillColor: '#4285F4',
          fillOpacity: 1,
          strokeWeight: 1,
          strokeColor: 'white',
        },
      });
    }
  }

  addDestination(): void {
    if (this.destination.trim() !== '') {
      this.waypoints.push(this.destination);
      this.destination = '';
      this.calculateAndDisplayRoute();
    }
  }

  addDestinationFromParent(destination: string): void {
    if (destination.trim() !== '') {
      this.waypoints.push(destination);
      this.destinationAdded.emit(destination);
      this.calculateAndDisplayRoute();
    }
  }
  calculateRoute(location: google.maps.places.PlaceResult): void {
    if (!this.startLocation || this.waypoints.length === 0) {
      return;
    }

    let waypts: {
      location: string | google.maps.LatLng | undefined;
      stopover: boolean;
    }[] = this.waypoints.slice(0, -1).map((location) => ({
      location,
      stopover: true,
    }));
    let wayptLatLng = this.waypointsLatLong.map((location) => ({
      location,
      stopover: true,
    }));
    waypts = [
      ...waypts,
      ...wayptLatLng,
      { location: location.geometry?.location, stopover: true },
    ];

    this.directionsService.route(
      {
        origin: this.startLocation,
        destination: this.waypoints[this.waypoints.length - 1],
        waypoints: waypts,
        optimizeWaypoints: false,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === google.maps.DirectionsStatus.OK && response) {
          const route = response.routes[0];
          const legs = route.legs;
          const legObservables = legs.map((item) =>
            this.checkIfMatchesNearbyLocation(
              item.end_location,
              location.place_id,
            ).pipe(
              map((isMatch) => ({
                isMatch,
                duration: item.duration?.value ?? 0,
              })),
              catchError(() => of({ isMatch: false, duration: 0 })),
            ),
          );

          forkJoin(legObservables).subscribe((results) => {
            let totalDuration = 0;

            for (const result of results) {
              totalDuration += result.duration;
              if (result.isMatch) {
                break;
              }
            }

            this.timeToArrive.emit(totalDuration);
          });
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      },
    );
  }

  checkIfMatchesNearbyLocation(
    location: google.maps.LatLng,
    locationToAdd: string | undefined,
  ): Observable<boolean> {
    const request: google.maps.places.PlaceSearchRequest = {
      location,
      radius: this.radius ? this.radius * 1000 : 1000,
      type: 'restaurant',
    };

    return new Observable<boolean>((observer) => {
      this.placesService.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          const locationMatched = results.some(
            (item) => item.place_id === locationToAdd,
          );
          observer.next(locationMatched);
          observer.complete();
        } else {
          console.error('Unable to find nearby places');
          observer.next(false);
          observer.complete();
        }
      });
    });
  }
  calculateAndDisplayRoute(): void {
    if (!this.startLocation || this.waypoints.length === 0) {
      return;
    }
    let waypts: {
      location: string | google.maps.LatLng | undefined;
      stopover: boolean;
    }[] = this.waypoints.slice(0, -1).map((location) => ({
      location,
      stopover: true,
    }));

    let wayptLatLng = this.waypointsLatLong.map((location) => ({
      location,
      stopover: true,
    }));
    waypts = [...waypts, ...wayptLatLng];
    this.directionsService.route(
      {
        origin: this.startLocation,
        destination: this.waypoints[this.waypoints.length - 1],
        waypoints: waypts,
        optimizeWaypoints: false,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === google.maps.DirectionsStatus.OK && response) {
          this.directionsRenderer.setDirections(response);
          let totalDistance = 0;
          let totalDuration = 0;

          response.routes[0].legs.forEach((leg) => {
            const distance = leg.distance?.value ?? 0;
            const duration = leg.duration?.value ?? 0;

            totalDistance += distance;
            totalDuration += duration;
          });

          this.routeRendered.emit({
            distance: Math.round(totalDistance / 1000),
            duration: Math.round(totalDuration / 60),
            waypoints: 2 + this.waypointsLatLong.length,
          });
          this.highlightRoute(response.routes[0].overview_path);
          if (this.isRefetchNearbyPlaces)
            response.routes[0].legs[0].steps.forEach((step) => {
              const location = step.end_location;
              this.getNearbyPlaces(location);
            });
          this.placeMarkers(response.routes[0].legs);
          this.isRefetchNearbyPlaces = false;
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      },
    );
  }

  getNearbyPlaces(location: google.maps.LatLng): void {
    const request: google.maps.places.PlaceSearchRequest = {
      location,
      radius: this.radius ? this.radius * 1000 : 1000,
      type: 'restaurant',
    };

    this.placesService.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        results.forEach((item) => {
          const exists = this.nearbyPlaces.some(
            (existingPlace) => existingPlace.place_id === item.place_id,
          );

          if (!exists) {
            const marker = new google.maps.Marker({
              position: item.geometry?.location,
              map: this.map,
              icon: ICONS.restu2,
            });
            this.addMarkerEvents(marker, item);
            this.allMarkers.push(marker);
            this.nearbyPlaces.push(item);
          }
        });
      } else {
        console.error('Unable to find nearby places');
      }
    });
  }

  addMarkerEvents(
    marker: google.maps.Marker,
    place: google.maps.places.PlaceResult,
  ) {
    let isMouseDown = false;
    let clickAndHoldTimeout: number;
    let isClickAndHoldTriggered = false;

    marker.addListener('mousedown', () => {
      isMouseDown = true;
      isClickAndHoldTriggered = false;

      clickAndHoldTimeout = window.setTimeout(() => {
        if (isMouseDown && this.navigationSteps === 6) {
          isClickAndHoldTriggered = true;
          if (this.previousSelectedMarker) {
            this.previousSelectedMarker.setIcon(ICONS.restu2);
          }
          this.currentSelectedMarker = marker;
          this.previousSelectedMarker = marker;
          this.markerSelected.emit(place);
          if (place?.geometry?.location) {
            this.calculateRoute(place);
          }
          this.currentSelectedMarker.setIcon({
            url: ICONS.restu,
            scaledSize: new google.maps.Size(48, 48),
          });
        }
      }, 1000);
    });

    marker.addListener('mouseup', () => {
      isMouseDown = false;
      if (clickAndHoldTimeout) {
        clearTimeout(clickAndHoldTimeout);
      }
    });
  }

  highlightRoute(overviewPath: google.maps.LatLng[]): void {
    if (this.currentPolygon) {
      this.currentPolygon.setMap(null);
      this.currentPolygon = null;
    }

    const bufferRadius = this.radius ? this.radius * 1000 : 1000;
    const earthRadius = 6378137;
    const allOuterCoords: google.maps.LatLngLiteral[] = [];
    const allInnerCoords: google.maps.LatLngLiteral[] = [];

    overviewPath.forEach((point) => {
      const circlePoints = this.generateCircleAroundPoint(
        point.lat(),
        point.lng(),
        bufferRadius,
        earthRadius,
      );
      allOuterCoords.push(...circlePoints);
      allInnerCoords.unshift(...circlePoints);
    });
    const bufferCoords = [...allOuterCoords, ...allInnerCoords];
    const routePolygon = new google.maps.Polygon({
      paths: bufferCoords,
      strokeColor: '#FF0000',
      strokeOpacity: 0.35,
      strokeWeight: 0,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
    });

    routePolygon.setMap(this.map);
    this.currentPolygon = routePolygon;
  }

  generateCircleAroundPoint(
    lat: number,
    lng: number,
    radius: number,
    earthRadius: number,
  ): google.maps.LatLngLiteral[] {
    const points: google.maps.LatLngLiteral[] = [];
    const numSegments = 36;
    for (let i = 0; i < numSegments; i++) {
      const angle = (i * 360) / numSegments;
      const angleRad = (angle * Math.PI) / 180;
      const offsetLat =
        (radius / earthRadius) * (180 / Math.PI) * Math.sin(angleRad);
      const offsetLng =
        ((radius / earthRadius) * (180 / Math.PI) * Math.cos(angleRad)) /
        Math.cos((lat * Math.PI) / 180);
      points.push({
        lat: lat + offsetLat,
        lng: lng + offsetLng,
      });
    }

    return points;
  }

  placeMarkers(legs: google.maps.DirectionsLeg[]): void {
    const startMarkerImage = ICONS.startMarkerImage;
    const endMarkerImage = ICONS.endMarkerImage;
    this.directionsRenderer.setOptions({ markerOptions: { visible: false } });
    new google.maps.Marker({
      position: legs[0].start_location,
      map: this.googleMap.googleMap,
      icon: startMarkerImage,
    });
    new google.maps.Marker({
      position: legs[legs.length - 1].end_location,
      map: this.googleMap.googleMap,
      icon: endMarkerImage,
    });
  }

  initializeDrawingManager(): void {
    this.drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: null,
      drawingControl: false,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [google.maps.drawing.OverlayType.POLYGON],
      },
      polygonOptions: {
        editable: true,
        draggable: true,
        fillColor: '#E17575',
        strokeColor: '#E17575',
      },
    });

    this.drawingManager.setMap(this.map);

    google.maps.event.addListener(
      this.drawingManager,
      'overlaycomplete',
      (event: google.maps.drawing.OverlayCompleteEvent) => {
        if (event.type === google.maps.drawing.OverlayType.POLYGON) {
          const path = (event.overlay as google.maps.Polygon).getPath();
          this.vertices = path.getArray().map((vertex: google.maps.LatLng) => ({
            lat: vertex.lat(),
            lng: vertex.lng(),
          }));
        }
        this.drawingManager.setDrawingMode(null);
      },
    );
  }

  startDrawingPolygon(): void {
    this.drawingManager.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);
  }
}
