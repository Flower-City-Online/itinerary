import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ModalService } from "../../services/core/modal/modal.service";

@Component({
  selector: "app-home",
  templateUrl: "./itineraries.component.html",
  styleUrl: "./itineraries.component.scss",
})
export class ItinerariesComponent {
  constructor(
    public router: Router,
    public modalService: ModalService
  ) {}
  backButtonClick() {
    window.history.back();
  }

  searchButtonClick() {
    this.router.navigate(["/search/"]).then((r) => {});
  }
}
