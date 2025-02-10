import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { Iicon } from 'src/app/interface/icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-search-chips',
  templateUrl: './search-chips.component.html',
  styleUrl: './search-chips.component.scss',
})
export class SearchChipsComponent {
  ICONS: Iicon = ICONS;
}
