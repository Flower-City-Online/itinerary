import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { IItineraryMember } from 'src/app/interface/itineraryMember';
import { ApiService } from 'src/app/services/core/api.service';

@Component({
  selector: 'app-itinerary-member',
  templateUrl: './itinerary-member.component.html',
  styleUrl: './itinerary-member.component.scss',
})
export class ItineraryMemberComponent implements OnInit {
  itineraryMembers: IItineraryMember[] | undefined;
  ICONS = ICONS;

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.apiService.get('/assets/totalMembers.json').subscribe((data) => {
      this.itineraryMembers = data as IItineraryMember[];
      this.cdr.detectChanges();
    });
  }

  handleMenueItemSelect(): void {}
  handleMenuItemChange(): void {}
  handleMenuClick(): void {}
}
