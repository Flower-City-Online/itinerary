import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { ModalService } from '../../../../../../services/core/modal/modal.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-create-itinerary-modal',
  templateUrl: './create-itinerary-modal.component.html',
  styleUrl: './create-itinerary-modal.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class CreateItineraryModalComponent implements OnInit {
  ICONS = ICONS;
  constructor(public modalService: ModalService) {}
  ngOnInit(): void {
    this.modalService.bottomToggleModal = false;
  }
  contentList = [
    {
      id: 1,
      title: 'ITINERARY.CREATE_CUSTOM_ITINERARY',
      description: 'ITINERARY.CREATE_CUSTOM_ITINERARY_DESCRIPTION',
      icon: ICONS.createLocation,
      shortTitle: false,
    },
    {
      id: 2,
      title: 'ITINERARY.CREATE_QUICK_ITINERARY',
      description: 'ITINERARY.CREATE_QUICK_ITINERARY_DESCRIPTION',
      icon: ICONS.robot,
      shortTitle: false,
    },
    {
      id: 3,
      title: 'ITINERARY.FEELING_LUCKY',
      description: 'ITINERARY.FEELING_LUCKY_DESCRIPTION',
      icon: ICONS.starBuilder,
      shortTitle: true,
    },
  ];

  backButton(): void {
    this.modalService.bottomToggleModal = !this.modalService.bottomToggleModal;
  }

  modalClick(itemId: number): void {}
}
