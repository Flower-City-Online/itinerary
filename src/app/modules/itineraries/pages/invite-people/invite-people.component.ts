import { Component, OnInit } from '@angular/core';
import { LibMenuItem } from 'nextsapien-component-lib';
import { ICONS } from 'src/app/constants/constants';
import { Iicon } from 'src/app/interface/icon';
import { CustomDropdownMenuService } from 'src/app/services/core/custom-dropdown-menu.service';
import { ModalService } from 'src/app/services/core/modal/modal.service';

@Component({
  selector: 'app-invite-people',
  templateUrl: './invite-people.component.html',
  styleUrl: './invite-people.component.scss',
})
export class InvitePeopleComponent implements OnInit {
  routeToSentInvites() {
    throw new Error('Method not implemented.');
  }
  libMenuItem: LibMenuItem[] = [];
  ICONS: Iicon = ICONS;

  ngOnInit(): void {
    this.libMenuItem = this.customMenuList.getMenuList('itineraries');
  }

  constructor(
    public customMenuList: CustomDropdownMenuService,
    public modalService: ModalService,
  ) {}

  handleSearchStringChange($event: string) {}

  clear(): void {}

  backButton(): void {
    window.history.back();
  }
}
