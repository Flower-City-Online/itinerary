import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibMenuItem } from 'nextsapien-component-lib';
import { ICONS } from 'src/app/constants/constants';
import { ItenariesRoutesEnum } from 'src/app/enums/ItenariesRoutes.enum';
import { Iicon } from 'src/app/interface/icon';
import { CustomDropdownMenuService } from '../../../../services/core/custom-dropdown-menu.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.scss',
})
export class BuilderComponent implements OnInit {
  showModal = false;
  libMenuItem: LibMenuItem[] = [];
  cssClasses = ['custom-modal-class'];
  ICONS: Iicon = ICONS;

  ngOnInit(): void {
    this.libMenuItem = this.customMenuList.getMenuList('builder');
  }

  constructor(
    public router: Router,
    public customMenuList: CustomDropdownMenuService,
  ) {}

  navigateToArchive(): void {
    this.router.navigate([ItenariesRoutesEnum.ARCHIVES]);
  }
}
