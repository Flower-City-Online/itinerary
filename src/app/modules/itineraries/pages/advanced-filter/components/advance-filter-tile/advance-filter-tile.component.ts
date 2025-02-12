import { Component, Input } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { AdvanceFilterActions } from 'src/app/interface/advanceFilterActions';

@Component({
  selector: 'advance-filter-tile',
  templateUrl: './advance-filter-tile.component.html',
  styleUrl: './advance-filter-tile.component.css'
})
export class AdvanceFilterTileComponent {
  ICONS:any = ICONS;
  @Input() filters : AdvanceFilterActions[] = [];
}
