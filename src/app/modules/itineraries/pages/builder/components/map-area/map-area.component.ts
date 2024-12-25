import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapGeocoder } from '@angular/google-maps';
import { Subscription } from 'rxjs';
import { MapAreaService } from '../../../../../../services/core/map-area.service';

@Component({
  selector: 'app-map-area',
  templateUrl: './map-area.component.html',
  styleUrls: ['./map-area.component.scss'],
})
export class MapAreaComponent implements OnInit, AfterViewInit {
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;
  private subscriptions: Subscription[] = [];
  markers: CustomMarker[] = [];
  isSelectMode = false;
  selectedPlaces: google.maps.places.PlaceResult[] = [];
  polylines: google.maps.Polyline[] = [];

  mapOptions: google.maps.MapOptions = {
    center: { lat: 37.7749, lng: -122.4194 },
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
    disableDefaultUI: true,
    zoomControl: true,
  };

  drawingManager!: google.maps.drawing.DrawingManager;
  selectedPolygon: google.maps.Polygon | null = null;

  constructor(
    private geocoder: MapGeocoder,
    private http: HttpClient,
    private mapAreaService: MapAreaService,
  ) {}
  polygonDrawn = false;
  private directionsService = new google.maps.DirectionsService();
  ngOnInit(): void {
    this.subscriptions.push(
      this.mapAreaService.drawMode$.subscribe((isDrawMode) => {
        if (isDrawMode) {
          this.enableDrawing();
        } else {
          this.disableDrawing();
        }
      }),
      this.mapAreaService.clearAction$.subscribe(() => {
        this.onClear();
      }),
      this.mapAreaService.selectMode$.subscribe((mode) => {
        this.isSelectMode = mode;
      }),
      this.mapAreaService.selectedPlaces$.subscribe((places) => {
        this.updateMarkers(places);
        if (places.length > 1) {
          this.calculateTotalDistance(places);
        }
      }),
    );
    this.getUserLocation();
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          // Set map center to user's current location
          this.mapOptions.center = userLocation;
          this.map.googleMap?.setCenter(userLocation);

          // Add marker for user’s location
          new CustomMarker({
            position: userLocation,
            map: this.map.googleMap!,
            icon: {
              url: '/assets/icons/not_blip.svg',
              scaledSize: new google.maps.Size(30, 30),
            },
            title: 'You are here',
          });
        },
        (error) => {
          console.error('Geolocation error:', error);
          // Handle geolocation error (optional: show a message or fallback to default location)
        },
      );
    } else {
      console.error('Geolocation not supported by this browser.');
    }
  }

  ngAfterViewInit(): void {
    const service = new google.maps.places.PlacesService(this.map.googleMap!);
    this.initializeDrawingManager();
  }

  initializeDrawingManager() {
    this.drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [google.maps.drawing.OverlayType.POLYGON],
      },
      polygonOptions: {
        fillColor: '#FF0000',
        fillOpacity: 0.1,
        strokeWeight: 2,
        clickable: true,
        editable: true,
      },
    });

    this.drawingManager.setMap(this.map.googleMap!);

    google.maps.event.addListener(
      this.drawingManager,
      'overlaycomplete',
      (event: any) => {
        if (this.selectedPolygon) this.selectedPolygon.setMap(null);
        this.selectedPolygon = event.overlay;
        this.polygonDrawn = true;

        if (event.type === google.maps.drawing.OverlayType.POLYLINE) {
          this.polylines.push(event.overlay);
        }

        this.mapAreaService.enableContinueButton(true);
        this.mapAreaService.disableDrawMode();
        this.capturePolygonCoordinates();
      },
    );
  }

  capturePolygonCoordinates() {
    if (this.selectedPolygon) {
      const path = this.selectedPolygon.getPath().getArray();
      const coordinates = path.map((latLng) => ({
        lat: latLng.lat(),
        lng: latLng.lng(),
      }));
      this.findPlacesWithinZone(coordinates);
    }
  }

  findPlacesWithinZone(coordinates: { lat: number; lng: number }[]) {
    const bounds = new google.maps.LatLngBounds();
    coordinates.forEach((coord) =>
      bounds.extend(new google.maps.LatLng(coord.lat, coord.lng)),
    );

    const service = new google.maps.places.PlacesService(this.map.googleMap!);
    const request = {
      bounds: bounds,
      keyword: 'restaurant', // Adjust as needed
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        const filteredResults = results.filter((place) =>
          this.isPointInPolygon(
            {
              lat: place.geometry?.location?.lat()!,
              lng: place.geometry?.location?.lng()!,
            },
            coordinates,
          ),
        );
        this.displayPlaces(filteredResults);
      } else {
        console.error('Places Service Error:', status);
      }
    });
  }

  isPointInPolygon(
    point: { lat: number; lng: number },
    polygon: { lat: number; lng: number }[],
  ): boolean {
    let isInside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const xi = polygon[i].lat,
        yi = polygon[i].lng;
      const xj = polygon[j].lat,
        yj = polygon[j].lng;
      const intersect =
        yi > point.lng !== yj > point.lng &&
        point.lat < ((xj - xi) * (point.lng - yi)) / (yj - yi) + xi;
      if (intersect) isInside = !isInside;
    }
    return isInside;
  }

  displayPlaces(places: google.maps.places.PlaceResult[]) {
    this.clearMarkers();
    places.forEach((place, index) => {
      const marker = new CustomMarker({
        position: place.geometry?.location!,
        map: this.map.googleMap!,
        title: place.name,
        icon: '/assets/icons/rest-icon2.svg',
      });
      marker['place'] = place;
      marker.addListener('click', () =>
        this.togglePlaceSelection(place, marker),
      );
      this.markers.push(marker);
    });
  }

  getMarkerByPlaceId(placeId: string): CustomMarker | undefined {
    return this.markers.find((marker) => marker.place?.place_id === placeId);
  }

  updateMarkers(places: google.maps.places.PlaceResult[]) {
    places.forEach((place, index) => {
      if (place.place_id) {
        const marker = this.getMarkerByPlaceId(place.place_id);
        if (marker) {
          if (index === 0) {
            marker.setIcon('/assets/icons/start-loc-marker.svg');
          } else if (index === places.length - 1) {
            marker.setIcon('/assets/icons/end-loc-marker.svg');
          } else {
            marker.setIcon('/assets/icons/restu-icon.svg');
          }
        }
      }
    });

    this.markers.forEach((marker) => {
      if (
        !this.selectedPlaces.some(
          (place) => marker.place?.place_id === place.place_id,
        )
      ) {
        marker.setIcon('/assets/icons/rest-icon2.svg');
      }
    });
  }

  togglePlaceSelection(
    place: google.maps.places.PlaceResult,
    marker: CustomMarker,
  ) {
    if (this.isSelectMode) {
      const index = this.selectedPlaces.findIndex(
        (selectedPlace) => selectedPlace.place_id === place.place_id,
      );

      if (index > -1) {
        this.selectedPlaces.splice(index, 1);
        marker.setIcon('/assets/icons/rest-icon2.svg');
      } else {
        this.selectedPlaces.push(place);
        const new_index = this.selectedPlaces.findIndex(
          (selectedPlace) => selectedPlace.place_id === place.place_id,
        );
        if (new_index === 0) {
          marker.setIcon('/assets/icons/start-loc-marker.svg');
        } else if (new_index === this.selectedPlaces.length - 1) {
          marker.setIcon('/assets/icons/end-loc-marker.svg');
        } else {
          marker.setIcon('/assets/icons/restu-icon.svg');
        }
      }

      if (this.selectedPlaces.length >= 2) {
        this.calculateTotalDistance(this.selectedPlaces);
      } else {
        this.mapAreaService.updateSelectedPlaces([], 0, '0 minutes');
      }
    }
  }

  calculateTotalDistance(places: google.maps.places.PlaceResult[]) {
    if (places.length < 2) {
      this.mapAreaService.updateSelectedPlaces([], 0, '0 minutes');
      return;
    }

    // Get user's current location
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported by this browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLocation = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude,
        );

        const waypoints = places.slice(1, places.length - 1).map((place) => ({
          location: place.geometry?.location!,
          stopover: true,
        }));

        const directionsRequest: google.maps.DirectionsRequest = {
          origin: userLocation,
          destination: places[places.length - 1].geometry?.location!,
          waypoints: waypoints,
          travelMode: google.maps.TravelMode.DRIVING,
        };

        this.directionsService.route(directionsRequest, (response, status) => {
          if (
            status === google.maps.DirectionsStatus.OK &&
            response &&
            response.routes[0]
          ) {
            const distance = response.routes[0].legs.reduce(
              (total, leg) => total + (leg.distance?.value || 0),
              0,
            );

            const duration = response.routes[0].legs.reduce(
              (total, leg) => total + (leg.duration?.value || 0),
              0,
            );

            // Convert duration from seconds to a readable format (e.g., minutes)
            const estimatedTime = this.formatTime(duration);

            // Update the selected places, total distance, and estimated time in the MapAreaService
            this.mapAreaService.updateSelectedPlaces(
              places,
              distance,
              estimatedTime,
            );
          } else {
            console.error('Directions request failed due to ' + status);
            this.mapAreaService.updateSelectedPlaces([], 0, '0 minutes'); // Reset if the request fails
          }
        });
      },
      (error) => {
        console.error('Error getting user location: ', error);
        this.mapAreaService.updateSelectedPlaces([], 0, '0 minutes'); // Reset if location retrieval fails
      },
    );
  }

  // Helper method to format time from seconds
  formatTime(duration: number): string {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    return `${hours}h ${minutes}m`; // Customize the format as needed
  }

  onDraw(): void {
    this.polygonDrawn = true;
  }

  clearMarkers() {
    this.markers.forEach((marker) => marker.setMap(null));
    this.markers = [];
  }

  onClear(): void {
    if (this.polylines.length > 0) {
      this.polylines.forEach((polyline) => polyline.setMap(null));
      this.polylines = [];
    }

    if (this.selectedPolygon) {
      this.selectedPolygon.setMap(null);
      this.selectedPolygon = null;
      this.polygonDrawn = false;
    }

    this.clearMarkers();
    this.selectedPlaces = [];
    this.mapAreaService.enableDrawMode();
    this.mapAreaService.enableContinueButton(false);
  }

  enableDrawing() {
    if (this.drawingManager) {
      this.drawingManager.setDrawingMode(
        google.maps.drawing.OverlayType.POLYGON,
      );
    }
  }

  disableDrawing() {
    if (this.drawingManager) {
      this.drawingManager.setDrawingMode(null);
    }
  }

  onContinue(): void {
    this.mapAreaService.enableSelectMode();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}

class CustomMarker extends google.maps.Marker {
  public place?: google.maps.places.PlaceResult;
}
