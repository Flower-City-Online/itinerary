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
  @Output() destinationAdded = new EventEmitter<string>();
  @Output() routeRendered = new EventEmitter<{
    distance: google.maps.Distance | undefined;
    duration: google.maps.Duration | undefined;
    waypoints: number;
  }>();
  nearbyPlaces: google.maps.places.PlaceResult[] = [];
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

  @ViewChild(GoogleMap) googleMap!: GoogleMap;

  ngOnInit(): void {
    this.getUserLocation();
  }

  ngAfterViewInit(): void {
    this.initializeDirectionsRenderer();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
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

  calculateAndDisplayRoute(): void {
    if (!this.startLocation || this.waypoints.length === 0) {
      return;
    }

    const waypts = this.waypoints.slice(0, -1).map((location) => ({
      location,
      stopover: true,
    }));

    this.directionsService.route(
      {
        origin: this.startLocation,
        destination: this.waypoints[this.waypoints.length - 1],
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === google.maps.DirectionsStatus.OK && response) {
          this.directionsRenderer.setDirections(response);
          this.routeRendered.emit({
            distance: response.routes[0].legs[0].distance,
            duration: response.routes[0].legs[0].duration,
            waypoints: this.waypoints.length,
          });
          this.highlightRoute(response.routes[0].overview_path);
          response.routes[0].legs[0].steps.forEach((step) => {
            const location = step.end_location;
            this.getNearbyPlaces(location);
          });
          this.placeMarkers(response.routes[0].legs);
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
          const marker = new google.maps.Marker({
            position: item.geometry?.location,
            map: this.googleMap.googleMap,
            icon: ICONS.restu,
          });

          this.addMarkerEvents(marker, item);
        });
        this.nearbyPlaces.push(...results);
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
        if (isMouseDown) {
          isClickAndHoldTriggered = true;
          console.log('Click and hold detected at:', place);
        }
      }, 1000);
    });

    marker.addListener('mouseup', () => {
      isMouseDown = false;
      if (clickAndHoldTimeout) {
        clearTimeout(clickAndHoldTimeout);
      }
    });

    marker.addListener('click', () => {
      if (!isClickAndHoldTriggered) {
        console.log('Marker clicked at:', place);
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
