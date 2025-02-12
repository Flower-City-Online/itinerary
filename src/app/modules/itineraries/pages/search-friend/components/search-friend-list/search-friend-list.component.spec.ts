import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFriendListComponent } from './search-friend-list.component';

describe('SearchFriendListComponent', () => {
  let component: SearchFriendListComponent;
  let fixture: ComponentFixture<SearchFriendListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchFriendListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchFriendListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
