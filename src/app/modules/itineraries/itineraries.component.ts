import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItenariesRoutesEnum } from 'src/app/enums/ItenariesRoutes.enum';
import { ModalService } from '../../services/core/modal/modal.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home',
  templateUrl: './itineraries.component.html',
  styleUrl: './itineraries.component.scss',
})
export class ItinerariesComponent {
  constructor(
    public router: Router,
    public modalService: ModalService,
  ) {}

  backButtonClick(): void {
    window.history.back();
  }

  searchButtonClick(): void {
    this.router.navigate([ItenariesRoutesEnum.SEARCH]).then((r) => {});
  }
}
