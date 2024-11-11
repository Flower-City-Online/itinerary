import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-search-chips',
  templateUrl: './search-chips.component.html',
  styleUrl: './search-chips.component.scss',
})
export class SearchChipsComponent {
  ICONS = ICONS;
}
