import { Component, OnInit } from "@angular/core";
import { LocationService } from "src/app/services/core/location.service";
@Component({
  selector: "app-itinerary-preview",
  templateUrl: "./itinerary-preview.component.html",
  styleUrl: "./itinerary-preview.component.css",
})
export class ItineraryPreviewComponent implements OnInit {
  constructor(public locationService: LocationService) {}
  initialLocation = { lat: 24.8607, lng: 67.0011 }; // Centered on California
  ngOnInit(): void {
    this.locationService.getCurrentLocation().then((location) => {
      this.initialLocation.lat = location.lat;
      this.initialLocation.lng = location.long;
      console.log(this.initialLocation);
    });
  }
  handleSearch(event: any) {
    // Change parameter type to 'any' to accept event
    console.log(event);
  }
  mapType = "satellite";
  locationsMarkers = [
    {
      icon: {
        url: "assets/1.png#custom_pin_maps",
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

  onMapLoaded(event: any) {
    console.log("Map Loaded:", event);
  }

  // faLocationDot = faLocationDot;

  toggleDrawingTool() {
    console.log("Drawing tool toggled");
    // Add your drawing tool toggle logic here
  }

  // public onMapActionEvent(mapActionEvent: MapActionEvent): void {
  //   switch (mapActionEvent.type) {
  //     case MapActionTypes.SetMapsSearch: {
  //       // Handle "SetMapsSearch" event here
  //       break;
  //     }

  //     case MapActionTypes.MapsAlertsEvent: {
  //       // Handle "MapsAlertsEvent" event here
  //       break;
  //     }

  //     case MapActionTypes.MapLoaded: {
  //       // Handle "MapLoaded" event here
  //       break;
  //     }

  //     case MapActionTypes.MarkerClick: {
  //       // Handle "MarkerClick" event here
  //       break;
  //     }

  //     case MapActionTypes.MarkerUpdated: {
  //       // Handle "MarkerUpdated" event here
  //       break;
  //     }

  //     case MapActionTypes.SetDeleteLocationIndex: {
  //       // Handle "SetDeleteLocationIndex" event here
  //       break;
  //     }

  //     case MapActionTypes.SetEditLocationIndex: {
  //       // Handle "SetEditLocationIndex" event here
  //       break;
  //     }

  //     case MapActionTypes.MapCenterChanged: {
  //       // Handle "MapCenterChanged" event here
  //       break;
  //     }

  //     default: {
  //       // Unhandled Action Event
  //       break;
  //     }
  //   }
  // }

  onMapActionEvent(param: any) {
    console.log(param);
  }
}
