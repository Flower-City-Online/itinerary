import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalService } from '../../services/core/modal/modal.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrl: './archives.component.scss',
})
export class ArchivesComponent {
  cssClass = ['deleteItineraries'];
  constructor(public modalService: ModalService) {}
  backButton() {
    window.history.back();
  }
}
