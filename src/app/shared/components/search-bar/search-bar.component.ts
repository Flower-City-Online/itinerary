import { Component, Input } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  @Input() placeholder: string = 'Search';
  ICONS = ICONS;
  handleSearchStringChange($event: string) {}

  clear() {}
}
