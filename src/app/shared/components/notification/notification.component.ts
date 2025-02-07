import { Component, Input } from '@angular/core';
import { LibMenuItem } from 'nextsapien-component-lib/lib/model/lib-menu-item';
import { ICONS } from 'src/app/constants/constants';
import { Iicon } from 'src/app/interface/icon';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent {
  @Input() libMenuItem!: LibMenuItem[];
  ICONS: Iicon = ICONS;

  handleMenueItemSelect(): void {}
  handleMenuItemChange(): void {}
  handleMenuClick(): void {}
}
