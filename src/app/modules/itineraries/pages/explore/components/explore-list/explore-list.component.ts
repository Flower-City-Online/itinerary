import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibMenuItem } from 'nextsapien-component-lib';
import { ItenariesRoutesEnum } from 'src/app/enums/ItenariesRoutes.enum';
import { CustomDropdownMenuService } from '../../../../../../services/core/custom-dropdown-menu.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-explore-list',
  templateUrl: './explore-list.component.html',
  styleUrl: './explore-list.component.scss',
})
export class ExploreListComponent implements OnInit {
  libMenuItem: LibMenuItem[] = [];
  libMenuItems = Array(10).fill(null);

  constructor(
    public customMenuList: CustomDropdownMenuService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.libMenuItem = this.customMenuList.getMenuList('itineraries');
  }

  navigateToDetail(item: LibMenuItem) {
    this.router.navigate([
      `itineraries/${ItenariesRoutesEnum.ITINERARY_DETAIL}`,
    ]);
  }
}
