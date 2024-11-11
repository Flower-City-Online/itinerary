import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { ModalService } from '../../../../services/core/modal/modal.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-serach-clear-history',
  templateUrl: './serach-clear-history.component.html',
  styleUrl: './serach-clear-history.component.scss',
})
export class SerachClearHistoryComponent {
  toggleModal = false;
  cssClasses = ['custom-modal-class'];
  ICONS = ICONS;
  constructor(public modalService: ModalService) {}
  openModal(): void {
    // Add your custom CSS classes
    this.modalService.toggleModal = !this.modalService.toggleModal;
  }

  closeModal(): void {
    this.modalService.toggleModal = !this.modalService.toggleModal;
  }
}
