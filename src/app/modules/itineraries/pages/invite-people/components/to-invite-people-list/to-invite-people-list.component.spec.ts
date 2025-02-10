import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToInvitePeopleListComponent } from './to-invite-people-list.component';

describe('ToInvitePeopleListComponent', () => {
  let component: ToInvitePeopleListComponent;
  let fixture: ComponentFixture<ToInvitePeopleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToInvitePeopleListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToInvitePeopleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
