import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ICONS } from 'src/app/constants/constants';
@Component({
  selector: 'app-add-places-footer',
  templateUrl: './add-places-footer.component.html',
  styleUrl: './add-places-footer.component.scss',
})
export class AddPlacesFooterComponent implements OnInit, OnChanges {
  @Input() selectedLocation!: google.maps.places.PlaceResult | null;
  @Input() timeToArrive: number = 0;
  stayTimeInMins = new FormControl<number | null>(0);
  formattedArrivalTime: string = '';
  @Output() stayTimeSelected = new EventEmitter<number | null>();
  @Output() onLocationAdd =
    new EventEmitter<google.maps.places.PlaceResult | null>();
  @Output() onLocationRemove =
    new EventEmitter<google.maps.places.PlaceResult | null>();
  ICONS = ICONS;

  selectedTab: string | undefined = '1';
  items: MenuItem[] = [
    {
      id: '1',
      label: 'Basic Info',
    },
    {
      id: '2',
      label: 'Date & Time',
    },
    {
      id: '3',
      label: 'Users',
    },
  ];

  ngOnInit(): void {
    console.log(this.timeToArrive);
    this.stayTimeInMins.valueChanges.subscribe();
    const currentTime = new Date();
    const arrivalTime = new Date(
      currentTime.getTime() + this.timeToArrive * 1000,
    );
    const options: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    };

    this.formattedArrivalTime = arrivalTime.toLocaleTimeString(
      'en-US',
      options,
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['timeToArrive'] && changes['timeToArrive'].currentValue) {
      this.timeToArrive = changes['timeToArrive'].currentValue;
      const currentTime = new Date();
      const arrivalTime = new Date(
        currentTime.getTime() + this.timeToArrive * 1000,
      );
      const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      };

      this.formattedArrivalTime = arrivalTime.toLocaleTimeString(
        'en-US',
        options,
      );
    }
  }

  onActiveItemChange(value: MenuItem) {
    this.selectedTab = value?.id;
  }

  handleAddClick(): void {
    console.log(this.selectedLocation);
    this.onLocationAdd.emit(this.selectedLocation);
  }

  handleRemoveClick(): void {
    this.onLocationRemove.emit(this.selectedLocation);
  }

  handleContinueClick(): void {
    this.stayTimeSelected.emit(this.stayTimeInMins.value);
  }
}
