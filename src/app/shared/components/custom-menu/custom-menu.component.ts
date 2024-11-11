import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { LibMenuItem } from 'nextsapien-component-lib';
import { ICONS } from 'src/app/constants/constants';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-custom-menu',
  templateUrl: './custom-menu.component.html',
  styleUrl: './custom-menu.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CustomMenuComponent {
  @Input() item!: LibMenuItem[];
  ICONS = ICONS;

  test1(): void {}
  test2(): void {}
  test3(): void {}
}
