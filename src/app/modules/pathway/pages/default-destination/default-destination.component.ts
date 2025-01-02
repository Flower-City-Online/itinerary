import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICONS, ITINERARY_CREATION_TYPES } from 'src/app/constants/constants';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-default-destination',
  templateUrl: './default-destination.component.html',
  styleUrl: './default-destination.component.scss',
})
export class DefaultDestinationComponent {
  showSearchLocation: boolean = false;
  destination: string = '';
  newDestination: string = '';
  ICONS = ICONS;
  itineraryCreationType: string = ITINERARY_CREATION_TYPES.pathway;
  startLocation: string = '';
  searchLocationType: string = '';
  duration: google.maps.Duration | undefined;
  distance: google.maps.Distance | undefined;
  noOfPlaces: number = 0;
  showRouteTypeModal: boolean = false;
  navigationSteps: number = 1;
  radius: number | null = 1;
  selectedLocation: google.maps.places.PlaceResult | null = null;
  timeToArrive: number = 0;
  addDestination(): void {
    this.newDestination = this.destination;
  }
  locationToAdd!: google.maps.places.PlaceResult | null;
  locationToRemove!: google.maps.places.PlaceResult | null;

  onRouteRendered(data: {
    distance: google.maps.Distance | undefined;
    duration: google.maps.Duration | undefined;
    waypoints: number;
  }): void {
    this.duration = data.duration;
    this.distance = data.distance;
    this.noOfPlaces = data.waypoints;
  }

  onDestinationAdded(destination: string): void {
    this.destination = '';
  }

  handleItineraryCreationTypeChange(value: string): void {
    this.itineraryCreationType = value;
  }

  handleContinueClick(): void {
    if (this.startLocation === '') this.searchLocationType = 'start';
    else this.searchLocationType = 'destination';
    if (this.startLocation && this.newDestination) this.navigationSteps = 4;
    else this.navigationSteps = 2;
  }

  handleEditLocationClick(value: string): void {
    this.searchLocationType = value;
    this.showSearchLocation = true;
  }

  handleSearchedLocation(value: string): void {
    if (this.searchLocationType === 'start') this.startLocation = value;
    else this.newDestination = value;
    this.navigationSteps = 3;
  }

  handleRouteTypeSelected(): void {
    this.navigationSteps = 5;
  }

  handeRouteRadiusSelected(radius: number | null): void {
    this.radius = radius;
    this.navigationSteps = 6;
  }

  onMarkerSelected(location: google.maps.places.PlaceResult): void {
    this.selectedLocation = location;
    this.navigationSteps = 7;
    console.log(this.navigationSteps);
  }

  onTimeToArriveChange(timeInSeconds: number): void {
    this.timeToArrive = timeInSeconds;
  }

  handleStayTimeSelected(time: number | null): void {}

  handleLocationAdd(location: google.maps.places.PlaceResult | null): void {
    this.locationToAdd = location;
  }
  handleLocationRemove(location: google.maps.places.PlaceResult | null): void {
    console.log(location);
    this.locationToRemove = location;
  }
}
