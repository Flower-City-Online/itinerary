import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceFilterTileComponent } from './advance-filter-tile.component';

describe('AdvanceFilterTileComponent', () => {
  let component: AdvanceFilterTileComponent;
  let fixture: ComponentFixture<AdvanceFilterTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceFilterTileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvanceFilterTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
