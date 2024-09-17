import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { BottomNavigationService } from "src/app/services/core/bottom-navigation.service";
import { ModalService } from "src/app/services/core/modal/modal.service";
import { ShadowRootHandlerService } from "src/app/services/core/shadow-root-handler.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  // Corrected from 'styleUrl' to 'styleUrls'
})
export class FooterComponent implements OnInit, AfterViewInit {
  public enableBack: boolean = false;

  constructor(
    public modalService: ModalService,
    private el: ElementRef,
    private shadowrootHandler: ShadowRootHandlerService,
    public bottomNavigationService: BottomNavigationService
  ) {}

  ngOnInit(): void {
    const selectedElement = this.bottomNavList.find((nav) => nav.id === 4);
    if (selectedElement) {
      this.bottomNavigationService.onNavigationChange(
        this.bottomNavList,
        selectedElement
      );
    }
    setTimeout(() => {
      this.enableBack = true;
    }, 0);
  }

  ngAfterViewInit(): void {
    this.initShadowrootHandler();
  }

  initShadowrootHandler() {
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

  bottomNavList = [
    {
      id: 1,
      label: "Home",
      iconPath: "assets/icons/home.svg",
      clickedIconPath: "assets/icons/home_red.svg",
      routerLink: "/itinaries",
      cssClass: "",
      height: "16",
      width: "17",
    },
    {
      id: 2,
      label: "Requests",
      iconPath: "assets/icons/favorite.svg",
      clickedIconPath: "assets/icons/favorite_red.svg",
      routerLink: "/requests",
      cssClass: "",
      height: "19",
      width: "19",
    },
    {
      id: 3,
      label: "Info",
      iconPath: "assets/icons/chat.svg",
      clickedIconPath: "assets/icons/chat_red.svg",
      routerLink: "/info",
      cssClass: "",
      height: "16",
      width: "17",
    },
    {
      id: 4,
      label: "Itineraries",
      iconPath: "assets/icons/itineraries.svg",
      clickedIconPath: "assets/icons/itineraries_red.svg",
      routerLink: "/itineraries",
      cssClass: "",
      height: "16",
      width: "17",
    },
    {
      id: 5,
      label: "Profile",
      iconPath: "assets/icons/user.svg",
      clickedIconPath: "assets/icons/user_red.svg",
      routerLink: "/profile",
      cssClass: "",
      height: "16",
      width: "17",
    },
  ];

  backClick() {
    // Implementation for back click event
  }
}
