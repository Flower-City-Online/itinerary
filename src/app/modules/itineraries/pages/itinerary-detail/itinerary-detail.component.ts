import { Component, Input } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { ItenariesRoutesEnum } from 'src/app/enums/ItenariesRoutes.enum';

@Component({
  selector: 'app-itinerary-detail',
  templateUrl: './itinerary-detail.component.html',
  styleUrl: './itinerary-detail.component.css',
})
export class ItineraryDetailComponent {
  @Input() itineraryTitle = 'Advance Tour';
  ICONS = ICONS;
  tabMenuItems = [
    {
      label: 'Summary',
      icon: 'pi pi-fw pi-home',
      routerLink: ItenariesRoutesEnum.ITINERARY_SUMMARY,
    },
    {
      label: 'Map',
      icon: 'pi pi-fw pi-map-marker',
      routerLink: ItenariesRoutesEnum.ITINERARY_MAP,
    },
    {
      label: 'Details',
      icon: 'pi pi-fw pi-user',
      routerLink: ItenariesRoutesEnum.ITINERARY_OTHER_DETAILS,
    },
  ];
}
