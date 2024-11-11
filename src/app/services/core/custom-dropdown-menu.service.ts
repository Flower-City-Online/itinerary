import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LibMenuItem } from 'nextsapien-component-lib';
import { ICONS } from 'src/app/constants/constants';
import { ModalService } from './modal/modal.service';

@Injectable({
  providedIn: 'root',
})
export class CustomDropdownMenuService {
  cssClasses = ['custom-modal-class'];
  ICONS = ICONS;
  // @ts-ignore
  itemList: LibMenuItem[] = [
    {
      title: 'Edit Itinerary',
      iconUrl: ICONS.edit,
    },
    {
      title: 'Archive',
      iconUrl: ICONS.archiveWhite,
    },
    {
      title: 'Unpublish',
      iconUrl: '',
    },
    {
      title: 'Assign to Client',
      iconUrl: ICONS.headphone,
    },
    {
      title: 'Add to Favorites',
      iconUrl: ICONS.heartWhite,
    },
    {
      title: 'Remove from Favorites',
      iconUrl: ICONS.heartFillRed,
    },
    {
      title: 'Share Itinerary',
      iconUrl: ICONS.share,
    },
    {
      title: 'Branch the Itinerary',
      iconUrl: ICONS.branch,
    },
    {
      title: 'Report',
      iconUrl: ICONS.report,
      command: () => {
        this.openSecondModal();
      },
    },
    {
      title: 'Restore Itinerary',
      iconUrl: ICONS.restore,
    },
    {
      title: 'Delete Forever',
      iconUrl: ICONS.deleteCross,
      command: () => {
        this.openModal();
      },
    },
  ];

  pageList = [
    {
      pageName: 'itineraries',
      itemList: [
        {
          title: 'Assign to Client',
        },
        {
          title: 'Add to Favorites',
        },
        {
          title: 'Share Itinerary',
        },
        {
          title: 'Branch the Itinerary',
        },
        {
          title: 'Report',
        },
      ],
    },
    {
      pageName: 'builder',
      itemList: [
        {
          title: 'Edit Itinerary',
        },
        {
          title: 'Unpublish',
        },
        {
          title: 'Archive',
        },
        {
          title: 'Add to Favorites',
        },
        {
          title: 'Share Itinerary',
        },
      ],
    },
    {
      pageName: 'archives',
      itemList: [
        {
          title: 'Restore Itinerary',
        },
        {
          title: 'Delete Forever',
        },
      ],
    },
    {
      pageName: 'favourite',
      itemList: [
        {
          title: 'Remove from Favorites',
        },
        {
          title: 'Share Itinerary',
        },
        {
          title: 'Report',
        },
      ],
    },
  ];

  constructor(
    public router: Router,
    public modalService: ModalService,
  ) {}

  getMenuList(pageName: string): LibMenuItem[] {
    // Find the pageList entry with matching pageName
    const page = this.pageList.find((page) => page.pageName === pageName);
    if (!page) {
      return []; // Return an empty array if pageName is not found
    }

    // Filter the itemList to include only items whose titles are in page.itemList
    const filteredList = this.itemList.filter((item) =>
      page.itemList.some((pageItem) => pageItem.title === item.title),
    );

    return filteredList;
  }

  openModal(): void {
    this.modalService.toggleModal = !this.modalService.toggleModal;
  }
  openSecondModal(): void {
    this.modalService.toggleModal = !this.modalService.toggleModal;
  }
}
