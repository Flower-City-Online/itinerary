import { Component } from '@angular/core';
import { SelectOption } from 'nextsapien-component-lib';
import { ICONS } from 'src/app/constants/constants';

@Component({
  selector: 'app-advanced-filter',
  templateUrl: './advanced-filter.component.html',
  styleUrl: './advanced-filter.component.css',
})
export class AdvancedFilterComponent {
  ICONS = ICONS;
  options: SelectOption<string>[] = [
    {
      label: 'Field',
      value: 'Field'
    },
  ];
}
