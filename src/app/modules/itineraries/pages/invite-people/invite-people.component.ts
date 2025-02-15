import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  ICONS: Iicon = ICONS;

  ngOnInit(): void {}

  constructor(
    public customMenuList: CustomDropdownMenuService,
    public modalService: ModalService,
    private _location: Location,
  ) {}

  handleSearchStringChange($event: string) {}

  clear(): void {}

  backButton(): void {
    this._location.back();
  }
}
