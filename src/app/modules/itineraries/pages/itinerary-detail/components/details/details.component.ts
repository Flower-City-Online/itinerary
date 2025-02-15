import { Component } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  ICONS = ICONS;
}
