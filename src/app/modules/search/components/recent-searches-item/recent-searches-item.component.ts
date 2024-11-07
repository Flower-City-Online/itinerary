import { Component } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';

@Component({
  selector: 'app-recent-searches-item',
  templateUrl: './recent-searches-item.component.html',
  styleUrl: './recent-searches-item.component.css',
})
export class RecentSearchesItemComponent {
  ICONS = ICONS;
}
