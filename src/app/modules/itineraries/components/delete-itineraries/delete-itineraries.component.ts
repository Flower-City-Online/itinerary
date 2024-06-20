import { Component } from '@angular/core';
import {ModalService} from "../../../../services/core/modal/modal.service";

@Component({
  selector: 'app-delete-itineraries',
  templateUrl: './delete-itineraries.component.html',
  styleUrl: './delete-itineraries.component.css'
})
export class DeleteItinerariesComponent {
  constructor(public modalService: ModalService) {
  }
}
