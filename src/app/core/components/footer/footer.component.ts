import {Component, OnInit} from '@angular/core';
import {BottomNavigationService} from "../../../services/core/bottom-navigation.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  ngOnInit(): void {
    const selectedElement = this.bottomNavList.find(nav => nav.id === 4);
    if (selectedElement) {
      this.bottomNavigationService.onNavigationChange(this.bottomNavList, selectedElement);
    }
  }
  constructor(public bottomNavigationService:BottomNavigationService) {

  }
  bottomNavList = [
    {
      id:1,
      label: 'Home',
      iconPath: 'assets/icons/home.svg',
      clickedIconPath: 'assets/icons/home_red.svg',
      routerLink: '/itinaries',
      cssClass:'',
      height: "16",
      width: "17"
    },
    {
      id:2,
      label: 'Requests',
      iconPath: 'assets/icons/favorite.svg',
      clickedIconPath: 'assets/icons/favorite_red.svg',
      routerLink: '/requests',
      cssClass:'',
      height: "19",
      width: "19"
    },
    {
      id:3,
      label: 'Info',
      iconPath: 'assets/icons/chat.svg',
      clickedIconPath: 'assets/icons/chat_red.svg',
      routerLink: '/info',
      cssClass:'',
      height: "16",
      width: "17"
    },
    {
      id:4,
      label: 'Itineraries',
      iconPath: 'assets/icons/itineraries.svg',
      clickedIconPath: 'assets/icons/itineraries_red.svg',
      routerLink: '/itineraries',
      cssClass:'',
      height: "16",
      width: "17"
    },
    {
      id:5,
      label: 'Profile',
      iconPath: 'assets/icons/user.svg',
      clickedIconPath: 'assets/icons/user_red.svg',
      routerLink: '/profile',
      cssClass:'',
      height: "16",
      width: "17"
    }
  ]
}
