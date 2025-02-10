import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LibMenuItem } from 'nextsapien-component-lib';
import { ICONS } from 'src/app/constants/constants';
import { Iicon } from 'src/app/interface/icon';
import { CustomDropdownMenuService } from '../../../../services/core/custom-dropdown-menu.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  libMenuItem: LibMenuItem[] = [];
  cardList: number[] = [];
  ICONS: Iicon = ICONS;

  ngOnInit(): void {
    this.libMenuItem = this.customMenuList.getMenuList('favourite');
  }

  constructor(public customMenuList: CustomDropdownMenuService) {}

  goFav(): void {
    this.cardList.push(1);
  }
}
