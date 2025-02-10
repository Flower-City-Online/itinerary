import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStoryCardComponent } from './custom-story-card.component';

describe('CustomStoryCardComponent', () => {
  let component: CustomStoryCardComponent;
  let fixture: ComponentFixture<CustomStoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomStoryCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomStoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
