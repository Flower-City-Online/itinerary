import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { Iicon } from 'src/app/interface/icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrl: './main-search.component.scss',
})
export class MainSearchComponent {
  ICONS: Iicon = ICONS;

  handleSearchStringChange($event: string) {}

  clear(): void {}
}
