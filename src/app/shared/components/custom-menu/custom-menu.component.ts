import { Component, Input } from "@angular/core";
import { LibMenuItem } from "nextsapien-component-lib";

@Component({
  selector: "app-custom-menu",
  templateUrl: "./custom-menu.component.html",
  styleUrl: "./custom-menu.component.css",
})
export class CustomMenuComponent {
  @Input() item!: LibMenuItem[];

  test1() {}
  test2() {}
  test3() {}
}
