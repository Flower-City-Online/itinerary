import { Component } from '@angular/core';
import {
  StatusPosition,
  StatusTypes,
  ToastService,
} from 'nextsapien-component-lib';
import { ICONS } from 'src/app/constants/constants';
@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrl: './comments-page.component.scss',
})
export class CommentsPageComponent {
  UpdateComment() {
    this.toastService.setToast = {
      header: 'Comment Updated',
      message:
        'Your featured comment will update after being approved by the author.',
      type: StatusTypes.Success,
    };
  }
  constructor(private toastService: ToastService) {}
  ICONS = ICONS;
  StatusPosition = StatusPosition;
  backButton(): void {
    window.history.back();
  }
}
