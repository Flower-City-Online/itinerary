import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MapAreaService } from '../../../../../../../services/core/map-area.service';

@Component({
  selector: 'app-map-area-header',
  templateUrl: './map-area-header.component.html',
  styleUrls: ['./map-area-header.component.scss'],
})
export class MapAreaHeaderComponent {
  @Input() cssClass!: string;
  constructor(
    private router: Router,
    public mapAreaService: MapAreaService,
  ) {}

  onBack() {
    this.router.navigate(['/itineraries/builder']);
    this.mapAreaService.triggerClearAction();
  }
  clear() {
    this.mapAreaService.triggerClearAction();
  }
}
