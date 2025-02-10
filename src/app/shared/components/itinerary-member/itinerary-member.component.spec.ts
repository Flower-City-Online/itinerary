import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryMemberComponent } from './itinerary-member.component';

describe('ItineraryMemberComponent', () => {
  let component: ItineraryMemberComponent;
  let fixture: ComponentFixture<ItineraryMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItineraryMemberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItineraryMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
