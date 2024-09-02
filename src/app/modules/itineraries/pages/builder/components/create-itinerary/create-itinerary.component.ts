import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { ShadowRootHandlerService } from "src/app/services/core/shadow-root-handler.service";
import { ModalService } from "../../../../../../services/core/modal/modal.service";

@Component({
  selector: "app-create-itinerary",
  templateUrl: "./create-itinerary.component.html",
  styleUrl: "./create-itinerary.component.css",
  encapsulation: ViewEncapsulation.None,
})
export class CreateItineraryComponent implements OnInit, AfterViewInit {
  @ViewChild("testModal", { static: false })
  testModal: CreateItineraryComponent;
  enableBack: boolean = false;
  cssClass = ["create-itinerary-modal"];
  constructor(
    public modalService: ModalService,
    private el: ElementRef,
    private shadowrootHandler: ShadowRootHandlerService
  ) {
    // this.accessShadowRoot();
  }
  ngAfterViewInit(): void {
    const targetNode = this.el.nativeElement;
    this.shadowrootHandler.accessShadowRoot(
      targetNode,
      "lib-bottom-modal",
      () => {
        this.applyStylesToDialog();
      }
    );
  }

  applyStylesToDialog() {
    const targetNode = this.el.nativeElement.querySelector(
      "lib-bottom-modal"
    ) as HTMLElement;

    if (targetNode) {
      const classNameElements =
        targetNode.getElementsByClassName("lib-bottom-modal");

      if (classNameElements.length > 0) {
        const dialogDiv = classNameElements[0].shadowRoot?.querySelector(
          'div[role="dialog"]'
        ) as HTMLElement;

        if (dialogDiv) {
          const modalHandle = dialogDiv.getElementsByClassName(
            "modal-handle"
          )[0] as HTMLElement;
          if (modalHandle) {
            modalHandle.style.display = "none";
            console.log("Modal handle hidden");
          } else {
            console.log("Modal handle element not found");
          }
          // Apply the desired styles
          dialogDiv.style.backgroundColor = "transparent"; // Example modification
          dialogDiv.style.boxShadow = "none";
          //remove the dialog uppar bar
        } else {
          console.log("Dialog div not found");
        }
      } else {
        console.log("Class name not found");
      }
    } else {
      console.log("Shadow root not accessible");
    }
  }

  ngOnInit(): void {
    this.modalService.bottomToggleModal = false;
  }

  openModal() {
    this.modalService.bottomToggleModal = !this.modalService.bottomToggleModal;
    // this.modalService.openModal(CreateItineraryModalComponent,this.cssClass);
  }
}
