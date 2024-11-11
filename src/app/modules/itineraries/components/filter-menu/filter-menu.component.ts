import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ICONS } from 'src/app/constants/constants';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrl: './filter-menu.component.scss',
})
export class FilterMenuComponent {
  @Input() cssClass!: string;
  ICONS = ICONS;

  options = [
    { label: 'Featured', value: '1' },
    { label: 'Hot', value: '2' },
    { label: 'Best', value: '3' },
    { label: 'New', value: '4' },
  ];
  formGroup = new FormGroup({
    filter: new FormControl(this.options[0].value),
  });

  changeSelection(): void {}
}
