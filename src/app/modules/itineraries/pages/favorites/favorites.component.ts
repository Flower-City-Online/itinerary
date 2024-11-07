import { Component, OnInit } from '@angular/core';
import { LibMenuItem } from 'nextsapien-component-lib';
import { ICONS } from 'src/app/constants/constants';
import { CustomDropdownMenuService } from '../../../../services/core/custom-dropdown-menu.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent implements OnInit {
  libMenuItem: LibMenuItem[] = [];
  cardList = [];
  ICONS = ICONS;
  ngOnInit(): void {
    this.libMenuItem = this.customMenuList.getMenuList('favourite');
  }
  constructor(public customMenuList: CustomDropdownMenuService) {}

  goFav() {
    // @ts-ignore
    this.cardList.push(1);
  }
}
