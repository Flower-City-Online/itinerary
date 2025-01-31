import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleUpdateCommentRequestComponent } from './handle-update-comment-request.component';

describe('HandleUpdateCommentRequestComponent', () => {
  let component: HandleUpdateCommentRequestComponent;
  let fixture: ComponentFixture<HandleUpdateCommentRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandleUpdateCommentRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandleUpdateCommentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
