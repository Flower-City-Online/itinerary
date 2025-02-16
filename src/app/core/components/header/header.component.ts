import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { LibMenuItem } from 'nextsapien-component-lib';
import { ICONS } from 'src/app/constants/constants';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() heading!: string;
  @Input() headerRightIcon: string = ICONS.search;
  @Output() firstButton = new EventEmitter<MouseEvent>();
  @Output() lastButton = new EventEmitter<MouseEvent>();
  @Input() cssClass!: string;
  @Input() isSearchVisible: boolean = true;
  @Input() menuItems: LibMenuItem[] = [];
  ICONS = ICONS;

  handleBackBtnClicked(): void {
    this.lastButton.emit;
  }

  firstButtonClick(): void {
    this.firstButton.emit;
  }
}
