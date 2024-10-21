import { Component } from "@angular/core";

@Component({
  selector: "app-default-destination",
  templateUrl: "./default-destination.component.html",
  styleUrl: "./default-destination.component.css",
})
export class DefaultDestinationComponent {
  destination: string = "";
  newDestination: string = "";

  addDestination() {
    this.newDestination = this.destination;
  }

  onDestinationAdded(destination: string) {
    this.destination = "";
  }
}
