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

  addDestination(): void {
    this.newDestination = this.destination;
  }

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
}
