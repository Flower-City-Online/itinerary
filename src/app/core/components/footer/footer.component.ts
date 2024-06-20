import {Component, OnInit} from '@angular/core';
import {BottomNavigationService} from "../../../services/core/bottom-navigation.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(public bottomNavigationService:BottomNavigationService) {
  }
  bottomNavList = [
    {
      id:1,
      label: 'Home',
      iconPath: 'assets/icons/home.svg',
      routerLink: '/pathway',
      cssClass:''
    },
    {
      id:2,
      label: 'Requests',
      iconPath: 'assets/icons/favorite.svg',
      routerLink: '/requests',
      cssClass:''
    },
    {
      id:3,
      label: 'Info',
      iconPath: 'assets/icons/chat.svg',
      routerLink: '/info',
      cssClass:''
    },
    {
      id:4,
      label: 'Itineraries',
      iconPath: 'assets/icons/itineraries.svg',
      routerLink: '/itineraries',
      cssClass:''
    },
    {
      id:5,
      label: 'Profile',
      iconPath: 'assets/icons/user.svg',
      routerLink: '/profile',
      cssClass:''
    }
  ]
}
