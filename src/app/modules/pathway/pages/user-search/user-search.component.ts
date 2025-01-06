import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { LibMenuItem } from 'nextsapien-component-lib';
import { ICONS } from 'src/app/constants/constants';
import { IUserData } from 'src/app/interface/userData';
@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSearchComponent {
  @Input() backLink: string = '/';
  @Input() customcss: string = 'py-1';
  @Input() showUsersSearch: boolean = true;
  @Input() groupedUsersByFood: {
    food: { name: string; image: string };
    users: IUserData[];
  }[] = [];
  @Input() users: IUserData[] = [];
  @Output() onInviteUser = new EventEmitter<IUserData>();
  ICONS = ICONS;
  showMemberDetail: boolean = false;
  selectedUser!: IUserData;
  libMenuItem: LibMenuItem[] = [
    {
      title: 'Invite',
      command: () => {
        this.onInviteUser.emit(this.selectedUser);
      },
    },
    {
      title: 'Show Details',
      command: () => {
        this.showMemberDetail = true;
      },
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

  handleUserClick(user: IUserData): void {
    this.selectedUser = user;
  }
}
