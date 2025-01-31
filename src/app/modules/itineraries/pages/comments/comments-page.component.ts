import { Component } from '@angular/core';
@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrl: './comments-page.component.scss',
})
export class CommentsPageComponent {
  backButton(): void {
    window.history.back();
  }
}
