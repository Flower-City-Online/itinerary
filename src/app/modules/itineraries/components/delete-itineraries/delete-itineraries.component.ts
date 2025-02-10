import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { Iicon } from 'src/app/interface/icon';
import { ModalService } from '../../../../services/core/modal/modal.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-delete-itineraries',
  templateUrl: './delete-itineraries.component.html',
  styleUrl: './delete-itineraries.component.scss',
})
export class DeleteItinerariesComponent {
  ICONS: Iicon = ICONS;

  constructor(public modalService: ModalService) {}

  closeModal(): void {
    this.modalService.toggleModal = !this.modalService.toggleModal;
  }

  onOk(): void {}
}
