import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICONS } from 'src/app/constants/constants';
import { ItenariesRoutesEnum } from 'src/app/enums/ItenariesRoutes.enum';
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
    this.router.navigate([ItenariesRoutesEnum.FRIEND_REQUESTS]);
  }
  ICONS: Iicon = ICONS;

  ngOnInit(): void {}

  constructor(
    public customMenuList: CustomDropdownMenuService,
    public modalService: ModalService,
    private _location: Location,
    private router: Router,
  ) {}

  handleSearchStringChange($event: string) {}

  clear(): void {}

  backButton(): void {
    this._location.back();
  }
}
