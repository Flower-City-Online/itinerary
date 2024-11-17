import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISideBarMenuItem } from 'src/app/interface/dashboardSideBar';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  isFilter: boolean = false;
  filterClass = 'filterSideBar';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.sideBarItem.forEach((element: ISideBarMenuItem) => {
      if (element.selected) {
        this.router.navigate([element.url]);
      }
    });
  }
  sideBarItem: ISideBarMenuItem[] = [
    {
      id: 1,
      name: 'Explore',
      selected: true,
      cssClass: 'active',
      url: '/dashboard/itineraries/explore',
    },
    {
      id: 2,
      name: 'Builder',
      selected: false,
      cssClass: '',
      url: '/dashboard/itineraries/explore',
    },
    {
      id: 3,
      name: 'Favourite',
      selected: false,
      cssClass: '',
      url: '/dashboard/itineraries/explore',
    },
  ];

  selectItem(item: ISideBarMenuItem): void {
    this.sideBarItem.forEach((element: ISideBarMenuItem) => {
      element.selected = false;
      element.cssClass = '';
    });
    item.selected = true;
    item.cssClass = 'active';
  }
}
