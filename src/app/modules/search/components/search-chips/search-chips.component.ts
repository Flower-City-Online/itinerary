import { Component } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';

@Component({
  selector: 'app-search-chips',
  templateUrl: './search-chips.component.html',
  styleUrl: './search-chips.component.css',
})
export class SearchChipsComponent {
  ICONS = ICONS;
}
