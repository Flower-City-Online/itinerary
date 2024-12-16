import { Injectable } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { ItenariesRoutesEnum } from 'src/app/enums/ItenariesRoutes.enum';
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
      routerLink: ItenariesRoutesEnum.ITINERARY,
      cssClass: '',
      height: '16',
      width: '17',
      selected: false,
    },
    {
      id: 2,
      label: 'Requests',
      iconPath: ICONS.favorite,
      clickedIconPath: ICONS.favorite,
      routerLink: ItenariesRoutesEnum.REQUESTS,
      cssClass: '',
      height: '19',
      width: '19',
      selected: false,
    },
    {
      id: 3,
      label: 'Info',
      iconPath: ICONS.chat,
      clickedIconPath: ICONS.chatRed,
      routerLink: ItenariesRoutesEnum.INFO,
      cssClass: '',
      height: '16',
      width: '17',
      selected: false,
    },
    {
      id: 4,
      label: 'Itineraries',
      iconPath: ICONS.itineraries,
      clickedIconPath: ICONS.itinerariesRed,
      routerLink: ItenariesRoutesEnum.ITINERARY,
      cssClass: '',
      height: '16',
      width: '17',
      selected: false,
    },
    {
      id: 5,
      label: 'Profile',
      iconPath: ICONS.user,
      clickedIconPath: ICONS.userRed,
      routerLink: ItenariesRoutesEnum.PROFILE,
      cssClass: '',
      height: '16',
      width: '17',
      selected: false,
    },
  ];
  constructor() {
    this.onNavigationChange(this.bottomNavList, {
      id: 4,
      label: 'Itineraries',
      iconPath: ICONS.itineraries,
      clickedIconPath: ICONS.itinerariesRed,
      routerLink: ItenariesRoutesEnum.ITINERARY,
      cssClass: '',
      height: '16',
      width: '17',
      selected: true,
    });
  }

  onNavigationChange(
    data: IBottomNavigationList[],
    nav: IBottomNavigationList,
  ): void {
    data.forEach((element: IBottomNavigationList) => {
      element.cssClass = '';
    });
    nav.cssClass = 'active';
    // nav.iconPath = nav.clickedIconPath
  }
}
