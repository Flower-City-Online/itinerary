import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { Iicon } from 'src/app/interface/icon';
@Component({
  selector: 'app-search-friend',
  templateUrl: './search-friend.component.html',
  styleUrl: './search-friend.component.scss',
})
export class SearchFriendComponent implements OnInit {
  routeToSentInvites() {}
  ICONS: Iicon = ICONS;

  ngOnInit(): void {}

  constructor(private _location: Location) {}

  handleSearchStringChange($event: string) {}

  clear(): void {}

  backButton(): void {
    this._location.back();
  }
}
