import { Injectable } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { IBottomNavigationList } from 'src/app/interface/bottomNavigationList';

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
      clickedIconPath: ICONS.homeRed,
      routerLink: '/itinaries',
      cssClass: '',
      height: '16',
      width: '17',
    },
    {
      id: 2,
      label: 'Requests',
      iconPath: ICONS.favorite,
      clickedIconPath: ICONS.favorite,
      routerLink: '/requests',
      cssClass: '',
      height: '19',
      width: '19',
    },
    {
      id: 3,
      label: 'Info',
      iconPath: ICONS.chat,
      clickedIconPath: ICONS.chatRed,
      routerLink: '/info',
      cssClass: '',
      height: '16',
      width: '17',
    },
    {
      id: 4,
      label: 'Itineraries',
      iconPath: ICONS.itineraries,
      clickedIconPath: ICONS.itinerariesRed,
      routerLink: '/itineraries',
      cssClass: '',
      height: '16',
      width: '17',
    },
    {
      id: 5,
      label: 'Profile',
      iconPath: ICONS.user,
      clickedIconPath: ICONS.userRed,
      routerLink: '/profile',
      cssClass: '',
      height: '16',
      width: '17',
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
      height: '16',
      width: '17',
    });
  }

  onNavigationChange(
    data: IBottomNavigationList[],
    nav: IBottomNavigationList,
  ) {
    data.forEach((element: IBottomNavigationList) => {
      element.cssClass = '';
    });
    nav.cssClass = 'active';
    // nav.iconPath = nav.clickedIconPath
  }
}
