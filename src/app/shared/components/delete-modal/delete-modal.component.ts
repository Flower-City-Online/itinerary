import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { ModalService } from '../../../services/core/modal/modal.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.scss',
})
export class DeleteModalComponent {
  @Output() delete = new EventEmitter<MouseEvent>();
  ICONS = ICONS;
  constructor(public modalService: ModalService) {}

  deleteItem(): void {
    this.delete.emit();
  }

  cancelToggle(): void {
    this.modalService.toggleModal = !this.modalService.toggleModal;
  }
}
