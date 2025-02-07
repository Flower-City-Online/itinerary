import { Location } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-total-members',
  templateUrl: './total-members.component.html',
  styleUrl: './total-members.component.scss',
})
export class TotalMembersComponent {
  constructor(private _location: Location) {}
  backButton(): void {
    this._location.back();
  }
}
