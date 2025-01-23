import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlacesFooterComponent } from './add-places-footer.component';

describe('AddPlacesFooterComponent', () => {
  let component: AddPlacesFooterComponent;
  let fixture: ComponentFixture<AddPlacesFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPlacesFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPlacesFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
