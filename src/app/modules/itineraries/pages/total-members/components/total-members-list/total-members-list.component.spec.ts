import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalMembersListComponent } from './total-members-list.component';

describe('TotalMembersListComponent', () => {
  let component: TotalMembersListComponent;
  let fixture: ComponentFixture<TotalMembersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalMembersListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalMembersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
