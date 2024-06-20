import { Component } from '@angular/core';

@Component({
  selector: 'app-itinerary-preview',
  templateUrl: './itinerary-preview.component.html',
  styleUrl: './itinerary-preview.component.css'
})
export class ItineraryPreviewComponent {

  handleSearch(event: any) {  // Change parameter type to 'any' to accept event
    console.log(event);
  }
  mapType = 'roadmap';
  locationsMarkers = [
    { lat: 37.7749, lng: -122.4194, label: 'San Francisco' },
    { lat: 34.0522, lng: -118.2437, label: 'Los Angeles' }
  ];
  initialLocation = { lat: 36.7783, lng: -119.4179 }; // Centered on California

  onMapLoaded(event: any) {
    console.log('Map Loaded:', event);
  }

  // faLocationDot = faLocationDot;

  toggleDrawingTool() {
    console.log('Drawing tool toggled');
    // Add your drawing tool toggle logic here
  }
  
}
