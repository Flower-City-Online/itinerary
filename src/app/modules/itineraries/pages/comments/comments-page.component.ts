import { Component } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrl: './comments-page.component.scss',
})
export class CommentsPageComponent {
  ICONS = ICONS;
  backButton(): void {
    window.history.back();
  }
}
