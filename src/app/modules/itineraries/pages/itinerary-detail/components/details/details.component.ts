import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICONS } from 'src/app/constants/constants';
import { ItenariesRoutesEnum } from 'src/app/enums/ItenariesRoutes.enum';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  ICONS = ICONS;
  usersImageSrc = '/assets/images/user-image.png';
  passions = ['Viynasa', 'Skincase', 'Baking', 'Hiking', 'Bicycle racing'];

  constructor(private router: Router) {}

  //NAVIGATIONS
  navToBranch = (): Promise<boolean> =>
    this.router.navigate([
      ItenariesRoutesEnum.ITINERARY,
      ItenariesRoutesEnum.BRANCHED_ITINERARIES,
    ]);
}
