import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ICONS } from 'src/app/constants/constants';
import { ItenariesRoutesEnum } from 'src/app/enums/ItenariesRoutes.enum';
import { MapAreaService } from '../../../../../../../services/core/map-area.service';

@Component({
  selector: 'app-map-area-header',
  templateUrl: './map-area-header.component.html',
  styleUrls: ['./map-area-header.component.scss'],
})
export class MapAreaHeaderComponent {
  ICONS = ICONS;
  @Input() cssClass!: string;

  constructor(
    private router: Router,
    public mapAreaService: MapAreaService,
  ) {}

  onBack(): void {
    this.router.navigate([ItenariesRoutesEnum.ITINERARY_BUILDER]);
    this.mapAreaService.triggerClearAction();
  }

  clear(): void {
    this.mapAreaService.triggerClearAction();
  }
}
