import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICONS } from 'src/app/constants/constants';
import { ItenariesRoutesEnum } from 'src/app/enums/ItenariesRoutes.enum';

@Component({
  selector: 'app-total-members-list',
  templateUrl: './total-members-list.component.html',
  styleUrl: './total-members-list.component.scss',
})
export class TotalMembersListComponent {
  routeToSendInvites() {
    this.router.navigate([ItenariesRoutesEnum.SENDINVITES]);
  }
  constructor(private router: Router) {}
  ICONS = ICONS;
  backButton(): void {
    window.history.back();
  }
}
