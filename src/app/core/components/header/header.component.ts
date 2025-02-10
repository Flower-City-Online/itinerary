import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { Iicon } from 'src/app/interface/icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() heading!: string;
  @Output() firstButton = new EventEmitter<MouseEvent>();
  @Output() lastButton = new EventEmitter<MouseEvent>();
  @Input() cssClass!: string;
  ICONS: Iicon = ICONS;

  handleBackBtnClicked(): void {
    this.lastButton.emit();
  }

  firstButtonClick(): void {
    this.firstButton.emit();
  }
}
