import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBottomBarComponent } from './modal-bottom-bar.component';

describe('ModalBottomBarComponent', () => {
  let component: ModalBottomBarComponent;
  let fixture: ComponentFixture<ModalBottomBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalBottomBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalBottomBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
