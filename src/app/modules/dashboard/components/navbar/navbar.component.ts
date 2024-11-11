import { Component } from '@angular/core';
import { LibMenuItem } from 'nextsapien-component-lib';
import { ICONS } from 'src/app/constants/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  ICONS = ICONS;
  menuItems: LibMenuItem[] = [
    {
      title: 'Logout',
      titlePrefix: '',
      iconUrl: ICONS.logout,
    },
    {
      title: 'Info',
      titlePrefix: '',
      iconUrl: ICONS.info,
    },
    {
      title: 'Feedback',
      titlePrefix: '',
      iconUrl: ICONS.feedback,
    },
    {
      title: ' Search',
      titleSuffix: 'AI',
      iconUrl: ICONS.dashboardSearch,
    },
    {
      title: 'Notifications',
      titlePrefix: '',
      iconUrl: ICONS.notifications,
    },
  ];
}
