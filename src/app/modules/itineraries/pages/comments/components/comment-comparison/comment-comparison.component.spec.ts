import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentComparisonComponent } from './comment-comparison.component';

describe('CommentComparisonComponent', () => {
  let component: CommentComparisonComponent;
  let fixture: ComponentFixture<CommentComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentComparisonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
