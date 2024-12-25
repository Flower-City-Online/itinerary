import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MapAreaService } from '../../../../../../../services/core/map-area.service';

@Component({
  selector: 'app-map-area-footer',
  templateUrl: './map-area-footer.component.html',
  styleUrls: ['./map-area-footer.component.scss'],
})
export class MapAreaFooterComponent implements OnInit {
  isContinueEnabled: boolean = false;
  isSelectMode = false;
  selectedPlaces: google.maps.places.PlaceResult[] = [];
  distance: string = '0.0 km';
  estimatedTime: string = '0 minutes';

  constructor(
    public mapAreaService: MapAreaService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.mapAreaService.continueButtonState$.subscribe((state) => {
      this.isContinueEnabled = state;
      this.cdr.detectChanges();
    });
    this.mapAreaService.selectMode$.subscribe((mode) => {
      this.isSelectMode = mode;
      this.cdr.detectChanges();
    });
    this.mapAreaService.distance$.subscribe((distance) => {
      this.distance = `${(distance / 1000.0).toFixed(1)} km`;
      this.cdr.detectChanges();
    });
    this.mapAreaService.selectedPlaces$.subscribe((places) => {
      this.selectedPlaces = places;
      this.cdr.detectChanges();
    });
    this.mapAreaService.estimatedTime$.subscribe((time) => {
      this.estimatedTime = time;
      this.cdr.detectChanges();
    });
  }
  onContinue(): void {
    if (!this.isSelectMode) {
      this.mapAreaService.enableSelectMode();
    } else {
      this.mapAreaService.disableSelectMode();
    }
  }

  onDeletePlace(index: number) {
    this.mapAreaService.removePlace(index);
  }

  onCancel() {}
}
