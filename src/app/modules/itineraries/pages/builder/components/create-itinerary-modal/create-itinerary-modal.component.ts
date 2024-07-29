import { Component } from '@angular/core';
import {ModalService} from "../../../../../../services/core/modal/modal.service";

@Component({
  selector: 'app-create-itinerary-modal',
  templateUrl: './create-itinerary-modal.component.html',
  styleUrl: './create-itinerary-modal.component.css'
})
export class CreateItineraryModalComponent {
  constructor(public modalService: ModalService) {
  }
  contentList = [
      {
        id: 1,
        title: 'Create,Custom Itinerary',
        description: 'Create itineraries imperatively, step by step using our personalization tools. ',
        icon: 'assets/icons/create_location.svg',
        shortTitle: false
      },
      {
        id: 2,
        title: 'Create,Quick Itinerary',
        description: 'Quick Itinerary tool helps you create itineraries by answering some simple questions',
        icon: 'assets/icons/robot.svg',
        shortTitle: false
      },
      {
        id: 3,
        title: 'Feeling Lucky',
        description: 'Instantly summons a personal itinerary from the abyss,\n' +
          'by using your profile information and answering all the\n' +
          'logistic questions randomly from the Quick Itinerary \n' +
          'tool.',
        icon: 'assets/icons/star_builder.svg',
        shortTitle: true
      }
    ]
  modalClick(id: number){
    console.log(id)
  }

  backButton() {
    this.modalService.bottomToggleModal = !this.modalService.bottomToggleModal;
  }
}
