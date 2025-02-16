import { Component, Input } from '@angular/core';
import { LibMenuItem } from 'nextsapien-component-lib';
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

  dropdownMenuItems: LibMenuItem[] = [
    {
      title: 'Edit Itinerary',
      iconUrl: ICONS.edit,
    },
    {
      title: 'Archive',
      iconUrl: ICONS.archiveWhite,
    },
    {
      title: 'Add to Favorites',
      iconUrl: ICONS.favorite,
    },
    {
      title: 'Share Itinerary',
      iconUrl: ICONS.share,
    },
    {
      title: 'Report',
      iconUrl: ICONS.report,
    },
    {
      title: 'Delete Itinerary',
      iconUrl: ICONS.delete,
      command: () => {
        this.isModalOpen = true;
      },
    },
  ];

  isModalOpen = false;

  onModalConfirmed() {
    this.isModalOpen = false;
  }

  onModalDismissed() {
    this.isModalOpen = false;
  }
}
