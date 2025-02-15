import { Component } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  ICONS = ICONS;
  usersImageSrc = '/assets/images/user-image.png';
  passions = ['Viynasa', 'Skincase', 'Baking', 'Hiking', 'Bicycle racing'];
}
