import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { Iicon } from 'src/app/interface/icon';
import { IItineraryMember } from 'src/app/interface/itineraryMember';
import { ApiService } from 'src/app/services/core/api.service';

@Component({
  selector: 'app-itinerary-people',
  templateUrl: './itinerary-people.component.html',
  styleUrl: './itinerary-people.component.scss',
})
export class ItineraryPeopleComponent implements OnInit {
  itineraryMembers: IItineraryMember[] | undefined;
  ICONS: Iicon = ICONS;

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.getTotalItineraryMembers();
  }

  getTotalItineraryMembers() {
    this.apiService.get('/assets/totalMembers.json').subscribe((data) => {
      this.itineraryMembers = data as IItineraryMember[];
      this.cdr.detectChanges();
    });
  }
  handleMenueItemSelect(): void {}
  handleMenuItemChange(): void {}
  handleMenuClick(): void {}
}
