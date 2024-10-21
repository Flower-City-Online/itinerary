import { Component, EventEmitter, Output } from "@angular/core";
import { ModalService } from "../../../services/core/modal/modal.service";

@Component({
  selector: "app-delete-modal",
  templateUrl: "./delete-modal.component.html",
  styleUrl: "./delete-modal.component.css",
})
export class DeleteModalComponent {
  @Output() delete = new EventEmitter<any>();
  constructor(public modalService: ModalService) {}

  deleteItem() {
    this.delete.emit();
  }

  cancelToggle() {
    this.modalService.toggleModal = !this.modalService.toggleModal;
  }
}
