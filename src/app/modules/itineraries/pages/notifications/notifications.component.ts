import { Location } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
})
export class NotificationsComponent {
  constructor(private _location: Location) {}
  backButton(): void {
    this._location.back();
  }
}
