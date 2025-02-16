import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { IItinerariesData } from 'src/app/interface/ItinerariesData';
import { ApiService } from 'src/app/services/core/api.service';
import { LocationService } from 'src/app/services/core/location.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
})
export class SummaryComponent {
  initialLocation = { lat: 24.8607, lng: 67.0011 }; // Centered on California
  ICONS: { [key: string]: string } = ICONS;
  usersImageSrc = '/assets/images/users.svg';

  places: IItinerariesData[] = [];

  constructor(
    public locationService: LocationService,
    public apiService: ApiService,
    public cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.apiService.get('/assets/ItinerariesData.json').subscribe((data) => {
      this.places = data as IItinerariesData[];
      this.cdr.detectChanges();
    });
    this.locationService.getCurrentLocation().subscribe((location) => {
      this.initialLocation.lat = location.lat;
      this.initialLocation.lng = location.long;
    });
  }
}
