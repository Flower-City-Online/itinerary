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

@Component({
  selector: 'app-places-footer',
  templateUrl: './places-footer.component.html',
  styleUrl: './places-footer.component.scss',
})
export class PlacesFooterComponent implements OnInit, OnChanges {
  places: string[] = ['All', 'My interests', 'Popular'];
  selectedPlace: number | null = null;
  toggleState: boolean = false;
  @Input() noOfPlaces: number = 0;
  @Input() noOfPlacesFormControl = new FormControl<number | null>(0);
  @Output() locationsAddContinue = new EventEmitter<void>();
  ngOnInit(): void {
    this.noOfPlacesFormControl.setValue(this.noOfPlaces);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['noOfPlaces'] && changes['noOfPlaces'].currentValue) {
      this.noOfPlacesFormControl.setValue(this.noOfPlaces);
    }
  }

  onToggleChange(value: boolean): void {
    this.toggleState = value;
  }

  handlePlaceSelection(index: number): void {
    this.selectedPlace = index;
  }

  handleContinueClick(): void {
    this.locationsAddContinue.emit();
  }
}
