import { Injectable } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { INavigationChange } from 'src/app/interface/navigationChange';

@Injectable({
  providedIn: 'root',
})
export class BottomNavigationService {
  public isShowNavigation: boolean = false;
  ICONS = ICONS;
  bottomNavList = [
    {
      id: 1,
      label: 'Home',
      iconPath: ICONS.home,
      routerLink: '/pathway',
      cssClass: '',
    },
    {
      id: 2,
      label: 'Requests',
      iconPath: ICONS.favorite,
      routerLink: '/requests',
      cssClass: '',
    },
    {
      id: 3,
      label: 'Info',
      iconPath: ICONS.chat,
      routerLink: '/info',
      cssClass: '',
    },
    {
      id: 4,
      label: 'Itineraries',
      iconPath: ICONS.itineraries,
      routerLink: '/itineraries',
      cssClass: '',
    },
    {
      id: 5,
      label: 'Profile',
      iconPath: ICONS.user,
      routerLink: '/profile',
      cssClass: '',
    },
  ];
  constructor() {
    this.onNavigationChange(this.bottomNavList, {
      id: 4,
      label: 'Itineraries',
      iconPath: ICONS.itineraries,
      clickedIconPath: ICONS.itinerariesRed,
      routerLink: '/itineraries',
      cssClass: '',
    });
  }

  onNavigationChange(data: INavigationChange[], nav: INavigationChange) {
    data.forEach((element: INavigationChange) => {
      element.cssClass = '';
    });
    nav.cssClass = 'active';
    // nav.iconPath = nav.clickedIconPath
  }
}
