import { Component, OnInit } from '@angular/core';
import { LibMenuItem } from 'nextsapien-component-lib';
import { CustomDropdownMenuService } from 'src/app/services/core/custom-dropdown-menu.service';
import { SharedModule } from '../../../../../../shared/shared.module';

@Component({
  selector: 'app-story-list',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './story-list.component.html',
  styleUrl: './story-list.component.css',
})
export class StoryListComponent implements OnInit {
  libMenuItem: LibMenuItem[] = [];
  libMenuItems = Array(10).fill(null);

  ngOnInit(): void {
    this.libMenuItem = this.customMenuList.getMenuList('stories');
  }
  constructor(public customMenuList: CustomDropdownMenuService) {}
}
