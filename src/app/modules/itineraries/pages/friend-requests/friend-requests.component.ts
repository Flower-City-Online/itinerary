import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { Iicon } from 'src/app/interface/icon';
@Component({
  selector: 'app-friend-requests',
  templateUrl: './friend-requests.component.html',
  styleUrl: './friend-requests.component.scss',
})
export class FriendRequestsComponent implements OnInit {
  routeToSentInvites() {
    throw new Error('Method not implemented.');
  }
  ICONS: Iicon = ICONS;

  ngOnInit(): void {}

  constructor(private _location: Location) {}

  handleSearchStringChange($event: string) {}

  clear(): void {}

  backButton(): void {
    this._location.back();
  }
}
