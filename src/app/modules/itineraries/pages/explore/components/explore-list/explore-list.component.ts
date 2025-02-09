import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LibMenuItem } from 'nextsapien-component-lib';
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

  constructor(public customMenuList: CustomDropdownMenuService) {}
  ngOnInit(): void {
    this.libMenuItem = this.customMenuList.getMenuList('itineraries');
  }
}
