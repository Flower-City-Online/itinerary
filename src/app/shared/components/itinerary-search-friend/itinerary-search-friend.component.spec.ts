import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItinerarySearchFriendComponent } from './itinerary-search-friend.component';

describe('ItinerarySearchFriendComponent', () => {
  let component: ItinerarySearchFriendComponent;
  let fixture: ComponentFixture<ItinerarySearchFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItinerarySearchFriendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItinerarySearchFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
