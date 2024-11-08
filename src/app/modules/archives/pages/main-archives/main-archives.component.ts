import { Component, OnInit } from '@angular/core';
import { LibMenuItem } from 'nextsapien-component-lib';
import { ICONS } from 'src/app/constants/constants';
import { CustomDropdownMenuService } from '../../../../services/core/custom-dropdown-menu.service';
import { ModalService } from '../../../../services/core/modal/modal.service';

@Component({
  selector: 'app-main-archives',
  templateUrl: './main-archives.component.html',
  styleUrl: './main-archives.component.scss'
})
export class MainArchivesComponent implements OnInit {
  libMenuItem: LibMenuItem[] = [];
  ICONS = ICONS;
  ngOnInit(): void {
    this.libMenuItem = this.customMenuList.getMenuList('archives');
  }
  constructor(
    public customMenuList: CustomDropdownMenuService,
    public modalService: ModalService,
  ) {}
}
