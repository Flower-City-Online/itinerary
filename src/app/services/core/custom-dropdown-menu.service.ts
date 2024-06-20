import {Injectable, OnInit} from '@angular/core';
import {LibMenuItem} from "nextsapien-component-lib";
import {Router} from "@angular/router";
import {
  ReportItineraryModalComponent
} from "../../modules/itineraries/components/report-itinerary-modal/report-itinerary-modal.component";
import {ModalService} from "./modal/modal.service";
import {
  DeleteItinerariesComponent
} from "../../modules/itineraries/components/delete-itineraries/delete-itineraries.component";

@Injectable({
  providedIn: 'root'
})
export class CustomDropdownMenuService{
  cssClasses = ['custom-modal-class'];
  // @ts-ignore
  itemList:LibMenuItem[] = [
    {
      title: 'Edit Itinerary',
      iconUrl: 'assets/icons/edit.svg',
    },
    {
      title: 'Archive',
      iconUrl: 'assets/icons/archives_white.svg',
    },
    {
      title: 'Unpublish',
      iconUrl: '',
    },
    {
      title: 'Assign to Client',
      iconUrl: 'assets/icons/headphone.svg',
    },
    {
      title: 'Add to Favorites',
      iconUrl: 'assets/icons/heart_white.svg',
    },
    {
      title: 'Remove from Favorites',
      iconUrl: 'assets/icons/heart_fill_red.svg',
    },
    {
      title: 'Share Itinerary',
      iconUrl: 'assets/icons/share.svg',
    },
    {
      title: 'Branch the Itinerary',
      iconUrl: 'assets/icons/branch.svg',
    },
    {
      title: 'Report',
      iconUrl: 'assets/icons/report.svg',
      command: () => {
        this.openModal2()
      }
    },
    {
      title: 'Restore Itinerary',
      iconUrl: 'assets/icons/restore.svg',
    },
    {
      title: 'Delete Forever',
      iconUrl: 'assets/icons/delete_cross.svg',
      command: () => {
        this.openModal()
      }
    }
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
          }
        ]
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
        }
      ]
    },
    {
      pageName: 'archives',
      itemList: [
        {
          title: 'Restore Itinerary',
        },
        {
          title: 'Delete Forever',
        }
      ]
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
        }
      ]
    },

  ]

  constructor(public router:Router,public modalService: ModalService) { }

  getMenuList(pageName: string): LibMenuItem[] {
    // Find the pageList entry with matching pageName
    const page = this.pageList.find(page => page.pageName === pageName);
    if (!page) {
      return []; // Return an empty array if pageName is not found
    }

    // Filter the itemList to include only items whose titles are in page.itemList
    const filteredList = this.itemList.filter(item =>
      page.itemList.some(pageItem => pageItem.title === item.title)
    );

    return filteredList;
  }


  openModal() {
    this.modalService.openModal(DeleteItinerariesComponent,this.cssClasses)
  }
  openModal2() {
    this.modalService.openModal(ReportItineraryModalComponent,this.cssClasses)
  }
}
