import { Component } from '@angular/core';
import { CommentsListComponent } from './components/comments-list/comments-list.component';

@Component({
  selector: 'app-comments-page',
  standalone: true,
  imports: [CommentsListComponent],
  templateUrl: './comments-page.component.html',
  styleUrl: './comments-page.component.css',
})
export class CommentsPageComponent {}
