import { Component } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { AdvanceFilterActions } from 'src/app/interface/advanceFilterActions';

@Component({
  selector: 'app-advanced-filter',
  templateUrl: './advanced-filter.component.html',
  styleUrl: './advanced-filter.component.css',
})
export class AdvancedFilterComponent {
  ICONS = ICONS;
  options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
  ];

  filters: AdvanceFilterActions[] = [
    {
      title: 'Featured',
      actions: 'Default',
      visible: true,
    },
    {
      title: 'Hot',
      actions: 'Default',
      visible: true,
    },
    {
      title: 'Best',
      actions: 'Default',
      visible: true,
    },
    {
      title: 'New',
      actions: 'Default',
      visible: false,
    },
    {
      title: 'Filter 1 | fields and conditions',
      actions: ['Delete', 'Edit'],
      visible: true,
    },
  ];
}
