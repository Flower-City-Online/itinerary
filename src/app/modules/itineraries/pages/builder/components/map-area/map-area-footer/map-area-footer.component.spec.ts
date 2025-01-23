import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAreaFooterComponent } from './map-area-footer.component';

describe('MapAreaFooterComponent', () => {
  let component: MapAreaFooterComponent;
  let fixture: ComponentFixture<MapAreaFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapAreaFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapAreaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
