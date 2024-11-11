import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { ShadowRootHandlerService } from 'src/app/services/core/shadow-root-handler.service';
import { ModalService } from '../../../../../../services/core/modal/modal.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-create-itinerary',
  templateUrl: './create-itinerary.component.html',
  styleUrl: './create-itinerary.component.scss',
})
export class CreateItineraryComponent implements OnInit, AfterViewInit {
  @ViewChild('testModal', { static: false })
  testModal: CreateItineraryComponent;
  enableBack: boolean = true;
  cssClass = ['create-itinerary-modal'];
  ICONS = ICONS;
  constructor(
    public modalService: ModalService,
    private el: ElementRef,
    private shadowrootHandler: ShadowRootHandlerService,
  ) {}

  ngAfterViewInit(): void {
    this.initShadowrootHandler();
  }

  initShadowrootHandler() {
    const targetNode = this.el.nativeElement;
    this.shadowrootHandler.accessShadowRoot(
      targetNode,
      'lib-bottom-modal',
      () => {
        this.applyStylesToDialog();
      },
    );
  }

  applyStylesToDialog() {
    const targetNode = this.el.nativeElement.querySelector(
      'lib-bottom-modal',
    ) as HTMLElement;

    if (targetNode) {
      const classNameElements =
        targetNode.getElementsByClassName('lib-bottom-modal');

      if (classNameElements.length > 0) {
        const dialogDiv = classNameElements[0].shadowRoot?.querySelector(
          'div[role="dialog"]',
        ) as HTMLElement;

        if (dialogDiv) {
          const modalHandle = dialogDiv.getElementsByClassName(
            'modal-handle',
          )[0] as HTMLElement;
          if (modalHandle) {
            modalHandle.style.display = 'none';
          } else {
          }
          // Apply the desired styles
          dialogDiv.style.backgroundColor = 'transparent'; // Example modification
          dialogDiv.style.boxShadow = 'none';
          //remove the dialog uppar bar
        } else {
        }
      } else {
      }
    } else {
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
