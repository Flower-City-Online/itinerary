import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteRadiusFooterComponent } from './route-radius-footer.component';

describe('RouteRadiusFooterComponent', () => {
  let component: RouteRadiusFooterComponent;
  let fixture: ComponentFixture<RouteRadiusFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteRadiusFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouteRadiusFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
