import {Component, OnInit} from '@angular/core';
import {LibMenuItem} from "nextsapien-component-lib";
import {CustomDropdownMenuService} from "../../../../services/core/custom-dropdown-menu.service";

@Component({
  selector: 'app-main-archives',
  templateUrl: './main-archives.component.html',
  styleUrl: './main-archives.component.css'
})
export class MainArchivesComponent implements OnInit{
  libMenuItem: LibMenuItem[] = [];
  ngOnInit(): void {
    this.libMenuItem=this.customMenuList.getMenuList('archives')
  }
  constructor(public customMenuList:CustomDropdownMenuService) {
  }
}
