import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ICONS, ITINERARY_CREATION_TYPES } from 'src/app/constants/constants';
import { MapAreaService } from 'src/app/services/core/map-area.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-default-destination',
  templateUrl: './default-destination.component.html',
  styleUrl: './default-destination.component.scss',
})
export class DefaultDestinationComponent implements OnInit {
  showSearchLocation: boolean = false;
  destination: string = '';
  newDestination: string = '';
  ICONS = ICONS;
  itineraryCreationType: string = ITINERARY_CREATION_TYPES.pathway;
  startLocation: string = '';
  searchLocationType: string = '';
  duration: number = 0;
  distance: number = 0;
  noOfPlaces: number = 0;
  showRouteTypeModal: boolean = false;
  navigationSteps: number = 1;
  radius: number | null = 1;
  selectedLocation: google.maps.places.PlaceResult | null = null;
  timeToArrive: number = 0;
  addedLocations: google.maps.places.PlaceResult[] = [];
  totalStayTimeInMins: number = 0;
  showMap: boolean = true;
  showDetails: boolean = false;
  showNothing: boolean = false;
  constructor(
    private cdr: ChangeDetectorRef,
    public mapAreaService: MapAreaService,
  ) {}

  ngOnInit(): void {
    this.mapAreaService.hideMap$.subscribe((value) => {
      this.showNothing = value;
    });
  }
  addDestination(): void {
    this.newDestination = this.destination;
  }
  locationToAdd!: google.maps.places.PlaceResult | null;
  locationToRemove!: google.maps.places.PlaceResult | null;

  onRouteRendered(data: {
    distance: number;
    duration: number;
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
    this.navigationSteps = 2;
    this.showDetails = false;
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
    this.cdr.detectChanges();
  }

  onTimeToArriveChange(timeInSeconds: number): void {
    this.timeToArrive = timeInSeconds;
  }

  handleStayTimeSelected(time: number | null): void {
    if (time) this.totalStayTimeInMins += time;
  }

  handleLocationAdd(location: google.maps.places.PlaceResult | null): void {
    this.locationToAdd = location;
    if (location) this.addedLocations.push(location);
    this.navigationSteps = 6;
  }

  handleDeleteLocation(location: google.maps.places.PlaceResult): void {
    this.addedLocations = this.addedLocations.filter(
      (item) => item.place_id !== location.place_id,
    );
    this.locationToRemove = location;
  }
  handleLocationRemove(location: google.maps.places.PlaceResult | null): void {
    this.navigationSteps = 6;
    if (location)
      this.addedLocations = this.addedLocations.filter(
        (item) => item.place_id !== location.place_id,
      );
    this.locationToRemove = location;
  }

  handleAddLocationsContinue(): void {
    this.duration += this.totalStayTimeInMins;
    this.navigationSteps = 8;
  }

  handlePreviewClick(): void {
    this.navigationSteps = 9;
  }

  handleTabItemChange(value: string) {
    if (value === 'Details') {
      this.showMap = false;
      this.showDetails = true;
    }
    if (value === 'Map') {
      this.showMap = true;
      this.showDetails = false;
    }
  }
}
