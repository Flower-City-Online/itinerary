import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { LibMenuItem } from 'nextsapien-component-lib';
import { ICONS } from 'src/app/constants/constants';
import { CustomDropdownMenuService } from 'src/app/services/core/custom-dropdown-menu.service';

@Component({
  selector: 'app-branched-itineraries',
  templateUrl: './branched-itineraries.component.html',
  styleUrl: './branched-itineraries.component.scss',
})
export class BranchedItinerariesComponent {
  libMenuItem: LibMenuItem[] = [];
  ICONS: any = ICONS;

  ngOnInit(): void {
    this.libMenuItem = this.customMenuList.getMenuList('itineraries');
  }

  constructor(
    private customMenuList: CustomDropdownMenuService,
    private location: Location,
  ) {}

  //NAVIGATIONS
  back = (): void => this.location.back();
}
