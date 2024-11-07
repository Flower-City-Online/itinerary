import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { ModalService } from '../../../../../../services/core/modal/modal.service';

@Component({
  selector: 'app-create-itinerary-modal',
  templateUrl: './create-itinerary-modal.component.html',
  styleUrl: './create-itinerary-modal.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class CreateItineraryModalComponent implements OnInit {
  ICONS = ICONS;
  constructor(public modalService: ModalService) {}
  ngOnInit(): void {
    this.modalService.bottomToggleModal = false;
  }
  contentList = [
    {
      id: 1,
      title: 'Create,Custom Itinerary',
      description:
        'Create itineraries imperatively, step by step using our personalization tools. ',
      icon: ICONS.createLocation,
      shortTitle: false,
    },
    {
      id: 2,
      title: 'Create,Quick Itinerary',
      description:
        'Quick Itinerary tool helps you create itineraries by answering some simple questions',
      icon: ICONS.robot,
      shortTitle: false,
    },
    {
      id: 3,
      title: 'Feeling Lucky',
      description:
        'Instantly summons a personal itinerary from the abyss,\n' +
        'by using your profile information and answering all the\n' +
        'logistic questions randomly from the Quick Itinerary \n' +
        'tool.',
      icon: ICONS.starBuilder,
      shortTitle: true,
    },
  ];

  backButton() {
    this.modalService.bottomToggleModal = !this.modalService.bottomToggleModal;
  }
}
