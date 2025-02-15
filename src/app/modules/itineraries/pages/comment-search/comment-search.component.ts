import { Component } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';

@Component({
  selector: 'app-comment-search',
  templateUrl: './comment-search.component.html',
  styleUrl: './comment-search.component.css',
})
export class CommentSearchComponent {
  ICONS = ICONS;
  userFiltersList: { name: string }[] = [{ name: 'Apple' }];
}
