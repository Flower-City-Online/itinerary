import {Component, OnInit} from '@angular/core';
import {LibMenuItem} from "nextsapien-component-lib";
import {CustomDropdownMenuService} from "../../../../services/core/custom-dropdown-menu.service";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent implements OnInit{
  libMenuItem: LibMenuItem[] = [];
  ngOnInit(): void {
    this.libMenuItem=this.customMenuList.getMenuList('itineraries')
  }
  constructor(public customMenuList:CustomDropdownMenuService) {
  }
}
