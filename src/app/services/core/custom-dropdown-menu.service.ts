import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LibMenuItem } from 'nextsapien-component-lib';
import { ICONS } from 'src/app/constants/constants';
import { ItenariesRoutesEnum } from 'src/app/enums/ItenariesRoutes.enum';
import { Iicon } from 'src/app/interface/icon';
import { ModalService } from './modal/modal.service';

@Injectable({
  providedIn: 'root',
})
export class CustomDropdownMenuService {
  cssClasses = ['custom-modal-class'];
  ICONS: Iicon = ICONS;
  itemList: LibMenuItem[] = [
    {
      title: 'EDIT_ITINERARY',
      iconUrl: ICONS.edit,
    },
    {
      title: 'ARCHIVE',
      iconUrl: ICONS.archiveWhite,
    },
    {
      title: 'UNPUBLISH',
      iconUrl: '',
    },
    {
      title: 'ASSIGN_TO_CLIENT',
      iconUrl: ICONS.headphone,
    },
    {
      title: 'ADD_TO_FAVORITES',
      iconUrl: ICONS.heartWhite,
    },
    {
      title: 'REMOVE_FROM_FAVORITES',
      iconUrl: ICONS.heartFillRed,
    },
    {
      title: 'SHARE_ITINERARY',
      iconUrl: ICONS.share,
    },
    {
      title: 'BRANCH_THE_ITINERARY',
      iconUrl: ICONS.branch,
    },
    {
      title: 'REPORT',
      iconUrl: ICONS.report,
      command: () => {
        this.openReportModal();
      },
    },
    {
      title: 'RESTORE_ITINERARY',
      iconUrl: ICONS.restore,
    },
    {
      title: 'DELETE_FOREVER',
      iconUrl: ICONS.deleteCross,
      command: () => {
        this.openModal();
      },
    },
    {
      title: 'EDIT_COMMENT',
      iconUrl: ICONS.edit,
      command: () => {
        this.navigateToRoute(ItenariesRoutesEnum.COMMENTS);
      },
    },
    {
      title: 'REMOVE_FEATURE',
      iconUrl: ICONS.removeFeature,
    },
    {
      title: 'DELETE_COMMENT',
      iconUrl: ICONS.deleteCross,
    },
  ];

  pageList = [
    {
      pageName: 'itineraries',
      itemList: [
        {
          title: 'ASSIGN_TO_CLIENT',
        },
        {
          title: 'ADD_TO_FAVORITES',
        },
        {
          title: 'SHARE_ITINERARY',
        },
        {
          title: 'BRANCH_THE_ITINERARY',
        },
        {
          title: 'REPORT',
          command: () => {
            this.openReportModal();
          },
        },
      ],
    },
    {
      pageName: 'builder',
      itemList: [
        {
          title: 'EDIT_ITINERARY',
        },
        {
          title: 'UNPUBLISH',
        },
        {
          title: 'ARCHIVE',
        },
        {
          title: 'ADD_TO_FAVORITES',
        },
        {
          title: 'SHARE_ITINERARY',
        },
      ],
    },
    {
      pageName: 'archives',
      itemList: [
        {
          title: 'RESTORE_ITINERARY',
        },
        {
          title: 'DELETE_FOREVER',
        },
      ],
    },
    {
      pageName: 'favourite',
      itemList: [
        {
          title: 'REMOVE_FROM_FAVORITES',
        },
        {
          title: 'SHARE_ITINERARY',
        },
        {
          title: 'REPORT',
        },
      ],
    },
    {
      pageName: 'stories',
      itemList: [
        {
          title: 'EDIT_COMMENT',
        },
        {
          title: 'REMOVE_FEATURE',
        },
        {
          title: 'DELETE_COMMENT',
        },
        {
          title: 'REPORT',
        },
      ],
    },
  ];

  constructor(
    public router: Router,
    public modalService: ModalService,
    public translateService: TranslateService,
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

    filteredList.forEach((item) => {
      item.title = item.title
        ? this.translateService.instant(item.title)
        : item.title;
    });
    page.itemList.forEach((item) => {
      item.title = this.translateService.instant(item.title);
    });
    return filteredList;
  }

  openModal(): void {
    this.modalService.toggleModal = !this.modalService.toggleModal;
  }
  openReportModal(): void {
    this.modalService.toggleModal = !this.modalService.toggleModal;
  }
  navigateToRoute(path: string): void {
    this.router.navigate([path], {
      queryParams: { mode: 'edit' },
    });
  }
}
