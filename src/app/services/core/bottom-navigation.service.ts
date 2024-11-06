import { Injectable } from '@angular/core';
import { INavigationChange } from 'src/app/interface/navigationChange';

@Injectable({
  providedIn: 'root',
})
export class BottomNavigationService {
  public isShowNavigation: boolean = false;

  bottomNavList = [
    {
      id: 1,
      label: 'Home',
      iconPath: 'assets/icons/home.svg',
      routerLink: '/pathway',
      cssClass: '',
    },
    {
      id: 2,
      label: 'Requests',
      iconPath: 'assets/icons/favorite.svg',
      routerLink: '/requests',
      cssClass: '',
    },
    {
      id: 3,
      label: 'Info',
      iconPath: 'assets/icons/chat.svg',
      routerLink: '/info',
      cssClass: '',
    },
    {
      id: 4,
      label: 'Itineraries',
      iconPath: 'assets/icons/itineraries.svg',
      routerLink: '/itineraries',
      cssClass: '',
    },
    {
      id: 5,
      label: 'Profile',
      iconPath: 'assets/icons/user.svg',
      routerLink: '/profile',
      cssClass: '',
    },
  ];
  constructor() {
    this.onNavigationChange(this.bottomNavList, {
      id: 4,
      label: 'Itineraries',
      iconPath: 'assets/icons/itineraries.svg',
      clickedIconPath: 'assets/icons/itineraries_red.svg',
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
