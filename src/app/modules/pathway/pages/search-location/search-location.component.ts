import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrl: './search-location.component.scss',
})
export class SearchLocationComponent {
  @Input() backLink: string = '/';
  @Input() customcss: string = 'py-1';
  @Input() searchLocationType!: string;
  @Output() searchedLocationEvent = new EventEmitter<string>();
  searchedLocation: string = '';
  constructor(private location: Location) {}
  ICONS = ICONS;

  goBack(): void {
    if (this.backLink) {
      window.location.href = this.backLink;
    } else {
      this.location.back();
    }
  }

  handleDoneClick(): void {
    this.searchedLocationEvent.emit(this.searchedLocation);
  }
}
