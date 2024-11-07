import { Component } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { ModalService } from '../../../../services/core/modal/modal.service';

@Component({
  selector: 'app-delete-itineraries',
  templateUrl: './delete-itineraries.component.html',
  styleUrl: './delete-itineraries.component.css',
})
export class DeleteItinerariesComponent {
  ICONS = ICONS;
  constructor(public modalService: ModalService) {}

  closeModal() {
    this.modalService.toggleModal = !this.modalService.toggleModal;
  }
}
