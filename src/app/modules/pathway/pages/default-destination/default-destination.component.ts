import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-default-destination',
  templateUrl: './default-destination.component.html',
  styleUrl: './default-destination.component.scss',
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
