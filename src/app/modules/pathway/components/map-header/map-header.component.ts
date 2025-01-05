import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ICONS } from 'src/app/constants/constants';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-map-header',
  templateUrl: './map-header.component.html',
  styleUrl: './map-header.component.scss',
})
export class MapHeaderComponent {
  @Input() title: string = 'Default Title';
  @Input() navigationSteps: number = 0;
  @Input() backLink: string = '/';
  @Input() customcss: string = 'py-1';
  @Output() onSearchClick = new EventEmitter<boolean>();
  @Output() tabItemChange = new EventEmitter<string>();
  ICONS = ICONS;
  isSearchClicked: boolean = false;
  items: MenuItem[] = [
    {
      id: '1',
      label: 'Details',
    },
    {
      id: '2',
      label: 'Map',
    },
  ];

  constructor(private location: Location) {}

  goBack(): void {
    if (this.backLink) {
      window.location.href = this.backLink;
    } else {
      this.location.back();
    }
  }

  onActiveItemChange(value: MenuItem) {
    this.tabItemChange.emit(value.label);
  }
}
