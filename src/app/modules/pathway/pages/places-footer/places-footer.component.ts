import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-places-footer',
  templateUrl: './places-footer.component.html',
  styleUrl: './places-footer.component.scss',
})
export class PlacesFooterComponent implements OnInit {
  places: string[] = ['All', 'My interests', 'Popular'];
  selectedPlace: number | null = null;
  toggleState: boolean = false;
  noOfPlaces = new FormControl<number | null>(0);

  ngOnInit(): void {
    this.noOfPlaces.valueChanges.subscribe();
  }

  onToggleChange(value: boolean): void {
    this.toggleState = value;
  }

  handlePlaceSelection(index: number): void {
    this.selectedPlace = index;
  }

  handleContinueClick(): void {}
}
