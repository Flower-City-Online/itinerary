import { Component, Input } from '@angular/core';
import { LibMenuItem } from 'nextsapien-component-lib';
import { ICONS } from 'src/app/constants/constants';

@Component({
  selector: 'app-custom-menu',
  templateUrl: './custom-menu.component.html',
  styleUrl: './custom-menu.component.css',
})
export class CustomMenuComponent {
  @Input() item!: LibMenuItem[];
  ICONS = ICONS;

  test1() {}
  test2() {}
  test3() {}
}
