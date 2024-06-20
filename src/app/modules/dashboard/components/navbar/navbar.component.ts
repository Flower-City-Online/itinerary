import { Component } from '@angular/core';
import {LibMenuItem} from "nextsapien-component-lib";
import {BottomNavigationService} from "../../../../services/core/bottom-navigation.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor() {
  }
  menuItems:LibMenuItem[] = [
    {
      title:'Logout',
      titlePrefix:'',
      iconUrl:'assets/icons/logout.svg',
    },
    {
      title:'Info',
      titlePrefix:'',
      iconUrl:'assets/icons/info.svg',
    },{
      title:'Feedback',
      titlePrefix:'',
      iconUrl:'assets/icons/feedback.svg',
    },{
      title:' Search',
      titleSuffix:'AI',
      iconUrl:'assets/icons/dashboard_search.svg',
    },{
      title:'Notifications',
      titlePrefix:'',
      iconUrl:'assets/icons/notifications.svg',
    }
  ]
}
