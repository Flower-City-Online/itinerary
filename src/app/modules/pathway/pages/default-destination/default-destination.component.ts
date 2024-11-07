import { Component } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';

@Component({
  selector: 'app-default-destination',
  templateUrl: './default-destination.component.html',
  styleUrl: './default-destination.component.css',
})
export class DefaultDestinationComponent {
  destination: string = '';
  newDestination: string = '';
  ICONS = ICONS;

  addDestination() {
    this.newDestination = this.destination;
  }

  onDestinationAdded(destination: string) {
    this.destination = '';
  }
}
