import { Component } from '@angular/core';

@Component({
  selector: 'app-total-members',
  templateUrl: './total-members.component.html',
  styleUrl: './total-members.component.scss',
})
export class TotalMembersComponent {
  backButton(): void {
    window.history.back();
  }
}
