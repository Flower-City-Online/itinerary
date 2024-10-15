import { Component, Input } from "@angular/core";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrl: "./search-bar.component.css",
})
export class SearchBarComponent {
  @Input() placeholder: string = "Search";
  handleSearchStringChange($event: any) {}

  clear() {}
}
