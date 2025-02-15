import { Component } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
ICONS = ICONS;
passions:string[]=[
  'Viynasa',
  'Skincare',
  'Baking',
  'Hiking',
  'Bicycle Racing'
];
}
