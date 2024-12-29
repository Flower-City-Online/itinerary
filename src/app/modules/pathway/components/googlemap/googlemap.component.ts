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
  }

  initializeDirectionsRenderer(): void {
    if (this.googleMap && this.googleMap.googleMap) {
      this.directionsRenderer.setMap(this.googleMap.googleMap!);
      this.placesService = new google.maps.places.PlacesService(this.map);
    }
  }

  onMapInitialized(map: any) {
    this.map = map;
    this.initializeDrawingManager();
  }

  getUserLocation() {
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

  addCurrentLocationMarker(position: google.maps.LatLngLiteral) {
    if (this.googleMap && this.googleMap.googleMap) {
      // Add a circle to represent the accuracy radius
      new google.maps.Circle({
        strokeColor: '#4285F4',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#4285F4',
        fillOpacity: 0.35,
        map: this.googleMap.googleMap,
        center: position,
        radius: 100, // Set the radius as needed (in meters)
      });

      // Add a marker to represent the current location
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

  addDestination() {
    if (this.destination.trim() !== '') {
      this.waypoints.push(this.destination);
      this.destination = '';
      this.calculateAndDisplayRoute();
    }
  }

  addDestinationFromParent(destination: string) {
    if (destination.trim() !== '') {
      this.waypoints.push(destination);
      this.destinationAdded.emit(destination);
      this.calculateAndDisplayRoute();
    }
  }

  calculateAndDisplayRoute() {
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
          console.log(response.routes[0]);
          this.highlightRouteWithoutLibraries(response.routes[0]);
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

  getNearbyPlaces(location: google.maps.LatLng) {
    const request: google.maps.places.PlaceSearchRequest = {
      location,
      radius: 1000, // 1 km
      type: 'restaurant',
    };

    this.placesService.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        new google.maps.Marker({
          position: results[0].geometry?.location,
          map: this.googleMap.googleMap,
          icon: ICONS.endMarkerImage,
        });
        this.nearbyPlaces.push(...results);
      }
    });
  }

  private highlightRouteWithoutLibraries(route: google.maps.DirectionsRoute) {
    const routePath = route.overview_path;
    const radiusInMeters = 1000; // 1 km

    // Arrays to store the left and right offset points
    const leftOffsetPoints: google.maps.LatLngLiteral[] = [];
    const rightOffsetPoints: google.maps.LatLngLiteral[] = [];

    // Iterate through the route path
    for (let i = 0; i < routePath.length - 1; i++) {
      const start = routePath[i];
      const end = routePath[i + 1];

      // Calculate the bearing (direction) between the two points
      const bearing = this.calculateBearing(start, end);

      // Calculate the offset points to the left and right
      const leftOffset = this.calculateOffsetPoint(
        start,
        bearing - 90,
        radiusInMeters,
      );
      const rightOffset = this.calculateOffsetPoint(
        start,
        bearing + 90,
        radiusInMeters,
      );

      leftOffsetPoints.push(leftOffset);
      rightOffsetPoints.push(rightOffset);
    }

    // Combine the left and right offset points into a single polygon
    const bufferPolygon = new google.maps.Polygon({
      paths: [...leftOffsetPoints, ...rightOffsetPoints.reverse()], // Combine left and right offsets
      strokeColor: '#FF0000',
      strokeOpacity: 0.3,
      strokeWeight: 0,
      fillColor: '#FF0000',
      fillOpacity: 0.3,
    });

    // Display the polygon on the map
    bufferPolygon.setMap(this.map);
  }

  private calculateBearing(
    start: google.maps.LatLng,
    end: google.maps.LatLng,
  ): number {
    const lat1 = this.degreesToRadians(start.lat());
    const lon1 = this.degreesToRadians(start.lng());
    const lat2 = this.degreesToRadians(end.lat());
    const lon2 = this.degreesToRadians(end.lng());

    const y = Math.sin(lon2 - lon1) * Math.cos(lat2);
    const x =
      Math.cos(lat1) * Math.sin(lat2) -
      Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
    return (this.radiansToDegrees(Math.atan2(y, x)) + 360) % 360; // Normalize to 0–360 degrees
  }

  private calculateOffsetPoint(
    point: google.maps.LatLng,
    bearing: number,
    distance: number,
  ): google.maps.LatLngLiteral {
    const earthRadius = 6378137; // Radius of Earth in meters
    const distRatio = distance / earthRadius;
    const bearingRad = this.degreesToRadians(bearing);

    const lat1 = this.degreesToRadians(point.lat());
    const lon1 = this.degreesToRadians(point.lng());

    const lat2 = Math.asin(
      Math.sin(lat1) * Math.cos(distRatio) +
        Math.cos(lat1) * Math.sin(distRatio) * Math.cos(bearingRad),
    );

    const lon2 =
      lon1 +
      Math.atan2(
        Math.sin(bearingRad) * Math.sin(distRatio) * Math.cos(lat1),
        Math.cos(distRatio) - Math.sin(lat1) * Math.sin(lat2),
      );

    return {
      lat: this.radiansToDegrees(lat2),
      lng: this.radiansToDegrees(lon2),
    };
  }

  private degreesToRadians(degrees: number): number {
    return (degrees * Math.PI) / 180;
  }

  private radiansToDegrees(radians: number): number {
    return (radians * 180) / Math.PI;
  }

  placeMarkers(legs: google.maps.DirectionsLeg[]) {
    const startMarkerImage = ICONS.startMarkerImage; // Replace with your custom start marker image URL
    const endMarkerImage = ICONS.endMarkerImage; // Replace with your custom end marker image URL

    // Clear existing markers if needed
    this.directionsRenderer.setOptions({ markerOptions: { visible: false } });

    console.log(legs[0]);
    console.log(this.nearbyPlaces);
    // Place custom start marker
    new google.maps.Marker({
      position: legs[0].start_location,
      map: this.googleMap.googleMap,
      icon: startMarkerImage,
    });

    // Place custom end marker
    new google.maps.Marker({
      position: legs[legs.length - 1].end_location,
      map: this.googleMap.googleMap,
      icon: endMarkerImage,
    });
  }

  initializeDrawingManager() {
    this.drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: null, // Start with no drawing mode
      drawingControl: false,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [google.maps.drawing.OverlayType.POLYGON],
      },
      polygonOptions: {
        editable: true,
        draggable: true,
        fillColor: '#E17575', // Set your polygon fill color
        strokeColor: '#E17575', // Set your polygon stroke color
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
        // Stop drawing mode after a polygon is created
        this.drawingManager.setDrawingMode(null);
      },
    );
  }

  startDrawingPolygon() {
    this.drawingManager.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);
  }
}
