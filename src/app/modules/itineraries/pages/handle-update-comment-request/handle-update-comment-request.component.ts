import { Component } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';

@Component({
  selector: 'app-handle-update-comment-request',
  templateUrl: './handle-update-comment-request.component.html',
  styleUrl: './handle-update-comment-request.component.scss',
})
export class HandleUpdateCommentRequestComponent {
  ICONS = ICONS;
  backButton(): void {
    window.history.back();
  }
}
