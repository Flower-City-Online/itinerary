import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LibMenuItem} from "nextsapien-component-lib";

@Component({
  selector: 'app-custom-menu',
  templateUrl: './custom-menu.component.html',
  styleUrl: './custom-menu.component.css'
})
export class CustomMenuComponent{
  @Input() item!: LibMenuItem[];


  test1(){
    console.log("test1")
  }
  test2(){
    console.log("test2")
  }
  test3(){
    console.log("test3")
  }
}
