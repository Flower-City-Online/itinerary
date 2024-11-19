import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ISideBarMenuItem } from 'src/app/interface/dashboardSideBar';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isFilter: boolean = false;
  filterClass = 'filter-side-bar';

  sideBarItem: ISideBarMenuItem[] = [];

  constructor(
    private router: Router,
    private translate: TranslateService,
  ) {}

  ngOnInit(): void {
    this.initializeSidebarItems();
    this.sideBarItem.forEach((element: ISideBarMenuItem) => {
      if (element.selected) {
        this.router.navigate([element.url]);
      }
    });
  }

  private initializeSidebarItems(): void {
    this.sideBarItem = [
      {
        id: 1,
        name: this.translate.instant('SIDEBAR.EXPLORE'),
        selected: true,
        cssClass: 'active',
        url: '/dashboard/itineraries/explore',
      },
      {
        id: 2,
        name: this.translate.instant('SIDEBAR.BUILDER'),
        selected: false,
        cssClass: '',
        url: '/dashboard/itineraries/explore',
      },
      {
        id: 3,
        name: this.translate.instant('SIDEBAR.FAVOURITE'),
        selected: false,
        cssClass: '',
        url: '/dashboard/itineraries/explore',
      },
    ];
  }

  selectItem(item: ISideBarMenuItem): void {
    this.sideBarItem.forEach((element: ISideBarMenuItem) => {
      element.selected = false;
      element.cssClass = '';
    });
    item.selected = true;
    item.cssClass = 'active';
  }
}
