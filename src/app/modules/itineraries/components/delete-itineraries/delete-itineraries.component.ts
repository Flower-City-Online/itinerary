import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { ModalService } from '../../../../services/core/modal/modal.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-delete-itineraries',
  templateUrl: './delete-itineraries.component.html',
  styleUrl: './delete-itineraries.component.scss',
})
export class DeleteItinerariesComponent {
  ICONS = ICONS;

  constructor(public modalService: ModalService) {}

  closeModal(): void {
    this.modalService.toggleModal = !this.modalService.toggleModal;
  }

  onOk(): void {}
}
