import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryPeopleComponent } from './itinerary-people.component';

describe('ItineraryPeopleComponent', () => {
  let component: ItineraryPeopleComponent;
  let fixture: ComponentFixture<ItineraryPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItineraryPeopleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItineraryPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
