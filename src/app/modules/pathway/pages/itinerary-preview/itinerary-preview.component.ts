import { Component, OnInit } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { LocationService } from 'src/app/services/core/location.service';
@Component({
  selector: 'app-itinerary-preview',
  templateUrl: './itinerary-preview.component.html',
  styleUrl: './itinerary-preview.component.css',
})
export class ItineraryPreviewComponent implements OnInit {
  constructor(public locationService: LocationService) {}
  initialLocation = { lat: 24.8607, lng: 67.0011 }; // Centered on California
  ICONS = ICONS;
  ngOnInit(): void {
    this.locationService.getCurrentLocation().subscribe((location) => {
      this.initialLocation.lat = location.lat;
      this.initialLocation.lng = location.long;
    });
  }
  handleSearch(event: string) {
    // Change parameter type to 'any' to accept event
  }
  mapType = 'satellite';
  locationsMarkers = [
    {
      icon: {
        url: 'assets/1.png#custom_pin_maps',
        size: new google.maps.Size(10, 10),
        scaledSize: new google.maps.Size(10, 10),
        anchor: null,
      },
      id: 1,
      omitMarkerCircle: false,
      position: this.initialLocation,
      radius: 100000,
    },
  ];

  onMapLoaded(event: boolean) {}

  toggleDrawingTool() {
    // Add your drawing tool toggle logic here
  }
}
