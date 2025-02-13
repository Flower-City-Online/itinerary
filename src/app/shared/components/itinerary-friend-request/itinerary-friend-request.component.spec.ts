import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryFriendRequestComponent } from './itinerary-friend-request.component';

describe('ItineraryFriendRequestComponent', () => {
  let component: ItineraryFriendRequestComponent;
  let fixture: ComponentFixture<ItineraryFriendRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItineraryFriendRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItineraryFriendRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
