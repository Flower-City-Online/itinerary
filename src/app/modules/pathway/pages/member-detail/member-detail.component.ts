import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LibMenuItem } from 'nextsapien-component-lib';
import { ICONS } from 'src/app/constants/constants';
import { IUserData } from 'src/app/interface/userData';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.scss',
})
export class MemberDetailComponent {
  @Input() selectedUser!: IUserData;
  @Input() backLink: string = '/';
  @Input() customcss: string = 'py-1';
  ICONS = ICONS;
  libMenuItem: LibMenuItem[] = [
    {
      title: 'Invite',
    },
  ];

  constructor(private location: Location) {}

  goBack(): void {
    if (this.backLink) {
      window.location.href = this.backLink;
    } else {
      this.location.back();
    }
  }

  handleMenueItemSelect(): void {}
  handleMenuItemChange(): void {}
  handleMenuClick(): void {}
}
