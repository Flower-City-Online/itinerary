import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSepraterComponent } from './section-seprater.component';

describe('SectionSepraterComponent', () => {
  let component: SectionSepraterComponent;
  let fixture: ComponentFixture<SectionSepraterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionSepraterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionSepraterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
