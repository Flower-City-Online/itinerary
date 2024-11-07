import { Component } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { ModalService } from '../../../../services/core/modal/modal.service';

@Component({
  selector: 'app-serach-clear-history',
  templateUrl: './serach-clear-history.component.html',
  styleUrl: './serach-clear-history.component.css',
})
export class SerachClearHistoryComponent {
  toggleModal = false;
  cssClasses = ['custom-modal-class'];
  ICONS = ICONS;
  constructor(public modalService: ModalService) {}
  openModal() {
    // Add your custom CSS classes
    this.modalService.toggleModal = !this.modalService.toggleModal;
  }

  closeModal() {
    this.modalService.toggleModal = !this.modalService.toggleModal;
  }
}
