import { Component } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';

@Component({
  selector: 'app-total-members-list',
  templateUrl: './total-members-list.component.html',
  styleUrl: './total-members-list.component.scss',
})
export class TotalMembersListComponent {
  ICONS = ICONS;
  backButton(): void {
    window.history.back();
  }
}
