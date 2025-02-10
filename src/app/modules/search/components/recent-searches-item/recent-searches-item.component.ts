import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { Iicon } from 'src/app/interface/icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-recent-searches-item',
  templateUrl: './recent-searches-item.component.html',
  styleUrl: './recent-searches-item.component.scss',
})
export class RecentSearchesItemComponent {
  ICONS: Iicon = ICONS;
}
