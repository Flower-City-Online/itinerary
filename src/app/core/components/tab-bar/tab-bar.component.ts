import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.scss',
})
export class TabBarComponent {
  tabMenuItems = [
    {
      label: 'Explore',
      icon: 'pi pi-fw pi-home',
      routerLink: '/itineraries/explore',
    },
    {
      label: 'Builder',
      icon: 'pi pi-fw pi-map-marker',
      routerLink: '/itineraries/builder',
    },
    {
      label: 'Favorites',
      icon: 'pi pi-fw pi-user',
      routerLink: '/itineraries/favorites',
    },
  ];
  onActiveItemChange($event: string) {}
}
