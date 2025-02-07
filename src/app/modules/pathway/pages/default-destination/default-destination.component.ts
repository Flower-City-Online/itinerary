import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { Iicon } from 'src/app/interface/icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-default-destination',
  templateUrl: './default-destination.component.html',
  styleUrl: './default-destination.component.scss',
})
export class DefaultDestinationComponent {
  destination: string = '';
  newDestination: string = '';
  ICONS: Iicon = ICONS;

  addDestination(): void {
    this.newDestination = this.destination;
  }

  onDestinationAdded(destination: string): void {
    this.destination = '';
  }
}
