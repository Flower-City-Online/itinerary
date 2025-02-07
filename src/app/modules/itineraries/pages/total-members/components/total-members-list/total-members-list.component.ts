import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICONS } from 'src/app/constants/constants';
import { ItenariesRoutesEnum } from 'src/app/enums/ItenariesRoutes.enum';
import { Iicon } from 'src/app/interface/icon';

@Component({
  selector: 'app-total-members-list',
  templateUrl: './total-members-list.component.html',
  styleUrl: './total-members-list.component.scss',
})
export class TotalMembersListComponent {
  routeToSendInvites() {
    this.router.navigate([ItenariesRoutesEnum.SENDINVITES]);
  }
  constructor(
    private router: Router,
    private _location: Location,
  ) {}
  ICONS: Iicon = ICONS;
  backButton(): void {
    this._location.back();
  }
}
