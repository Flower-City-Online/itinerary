import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteTypeFooterComponent } from './route-type-footer.component';

describe('RouteTypeFooterComponent', () => {
  let component: RouteTypeFooterComponent;
  let fixture: ComponentFixture<RouteTypeFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteTypeFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouteTypeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
