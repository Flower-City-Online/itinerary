import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LibMenuItem } from 'nextsapien-component-lib';
import { ICONS } from 'src/app/constants/constants';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  ICONS = ICONS;
  menuItems: LibMenuItem[] = [];
  navigationItems = [
    { label: 'USER.MENU.HOME', iconPath: this.ICONS.dashHomeActive },
    { label: 'USER.MENU.CONSTITUENTS', iconPath: this.ICONS.users },
    { label: 'USER.MENU.ITINERARY', iconPath: this.ICONS.itineraries },
    { label: 'USER.MENU.STATS', iconPath: this.ICONS.stats },
    { label: 'USER.MENU.SETTINGS', iconPath: this.ICONS.setting },
  ];
  constructor(private translate: TranslateService) {
    this.initializeMenuItems();
  }

  private initializeMenuItems() {
    this.menuItems = [
      {
        title: this.translate.instant('NAVBAR.LOGOUT'),
        titlePrefix: '',
        iconUrl: ICONS.logout,
      },
      {
        title: this.translate.instant('NAVBAR.INFO'),
        titlePrefix: '',
        iconUrl: ICONS.info,
      },
      {
        title: this.translate.instant('NAVBAR.FEEDBACK'),
        titlePrefix: '',
        iconUrl: ICONS.feedback,
      },
      {
        title: this.translate.instant('NAVBAR.SEARCH_2'),
        titleSuffix: 'AI',
        iconUrl: ICONS.dashboardSearch,
      },
      {
        title: this.translate.instant('NAVBAR.NOTIFICATIONS'),
        titlePrefix: '',
        iconUrl: ICONS.notifications,
      },
    ];
  }

  handleSearchStringChange($event: string) {}

  clear(): void {}
}
