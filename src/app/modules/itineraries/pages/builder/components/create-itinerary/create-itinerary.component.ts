import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { ModalService } from "../../../../../../services/core/modal/modal.service";

@Component({
  selector: "app-create-itinerary",
  templateUrl: "./create-itinerary.component.html",
  styleUrl: "./create-itinerary.component.css",
  encapsulation: ViewEncapsulation.None,
})
export class CreateItineraryComponent implements OnInit {
  @ViewChild("testModal", { static: false })
  testModal: CreateItineraryComponent;
  enableBack: boolean = false;
  cssClass = ["create-itinerary-modal"];
  constructor(public modalService: ModalService) {}
  ngOnInit(): void {
    this.modalService.bottomToggleModal = false;
  }

  openModal() {
    this.modalService.bottomToggleModal = !this.modalService.bottomToggleModal;
    // this.modalService.openModal(CreateItineraryModalComponent,this.cssClass);
  }
}
