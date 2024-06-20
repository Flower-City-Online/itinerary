import { Component } from '@angular/core';
import {ModalService} from "../../../../../../services/core/modal/modal.service";
import {CreateItineraryModalComponent} from "../create-itinerary-modal/create-itinerary-modal.component";

@Component({
  selector: 'app-create-itinerary',
  templateUrl: './create-itinerary.component.html',
  styleUrl: './create-itinerary.component.css'
})
export class CreateItineraryComponent {
  cssClass = ['create-itinerary-modal'];
  constructor(public modalService: ModalService) {

  }

  openModal(){
    this.modalService.openModal(CreateItineraryModalComponent,this.cssClass);
  }
}
