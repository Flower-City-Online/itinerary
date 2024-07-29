import { Component, ViewEncapsulation } from '@angular/core';
import {ModalService} from "../../../../../../services/core/modal/modal.service";
import {CreateItineraryModalComponent} from "../create-itinerary-modal/create-itinerary-modal.component";

@Component({
  selector: 'app-create-itinerary',
  templateUrl: './create-itinerary.component.html',
  styleUrl: './create-itinerary.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CreateItineraryComponent {
  cssClass = ['create-itinerary-modal'];
  constructor(public modalService: ModalService) {

  }

  openModal(){
    this.modalService.bottomToggleModal = !this.modalService.bottomToggleModal;
    // this.modalService.openModal(CreateItineraryModalComponent,this.cssClass);
  }
}
