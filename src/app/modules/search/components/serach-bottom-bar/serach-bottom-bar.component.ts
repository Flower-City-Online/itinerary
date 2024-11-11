import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-serach-bottom-bar',
  templateUrl: './serach-bottom-bar.component.html',
  styleUrl: './serach-bottom-bar.component.scss',
})
export class SerachBottomBarComponent {
  ICONS = ICONS;
}
