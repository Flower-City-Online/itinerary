import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglemapdemoComponent } from './googlemapdemo.component';

describe('GooglemapdemoComponent', () => {
  let component: GooglemapdemoComponent;
  let fixture: ComponentFixture<GooglemapdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GooglemapdemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GooglemapdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
