import { Component } from '@angular/core';
import {ModalService} from "../../../../services/core/modal/modal.service";
import {DeleteModalComponent} from "../../../../shared/components/delete-modal/delete-modal.component";

@Component({
  selector: 'app-serach-clear-history',
  templateUrl: './serach-clear-history.component.html',
  styleUrl: './serach-clear-history.component.css'
})
export class SerachClearHistoryComponent {
  cssClasses = ['custom-modal-class'];
  constructor(public modalService: ModalService) {
  }
  openModal() {
    // Add your custom CSS classes
    this.modalService.openModal(DeleteModalComponent,this.cssClasses)
  }
}
