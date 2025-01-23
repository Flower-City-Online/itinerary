import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAreaHeaderComponent } from './map-area-header.component';

describe('MapAreaHeaderComponent', () => {
  let component: MapAreaHeaderComponent;
  let fixture: ComponentFixture<MapAreaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapAreaHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapAreaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
