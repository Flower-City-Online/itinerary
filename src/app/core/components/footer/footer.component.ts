import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { BottomNavigationService } from 'src/app/services/core/bottom-navigation.service';
import { ModalService } from 'src/app/services/core/modal/modal.service';
import { ShadowRootHandlerService } from 'src/app/services/core/shadow-root-handler.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FooterComponent implements OnInit, AfterViewInit {
  public enableBack: boolean = false;

  constructor(
    public modalService: ModalService,
    private el: ElementRef,
    private shadowrootHandler: ShadowRootHandlerService,
    public bottomNavigationService: BottomNavigationService,
  ) {}

  ngOnInit(): void {
    const selectedElement = this.bottomNavList.find((nav) => nav.id === 4);
    if (selectedElement) {
      this.bottomNavigationService.onNavigationChange(
        this.bottomNavList,
        selectedElement,
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
        } else {
        }
      } else {
      }
    } else {
    }
  }

  bottomNavList = [
    {
      id: 1,
      label: 'Home',
      iconPath: ICONS.home,
      clickedIconPath: ICONS.homeRed,
      routerLink: '/itinaries',
      cssClass: '',
      height: '16',
      width: '17',
    },
    {
      id: 2,
      label: 'Requests',
      iconPath: ICONS.favorite,
      clickedIconPath: ICONS.favorite,
      routerLink: '/requests',
      cssClass: '',
      height: '19',
      width: '19',
    },
    {
      id: 3,
      label: 'Info',
      iconPath: ICONS.chat,
      clickedIconPath: ICONS.chatRed,
      routerLink: '/info',
      cssClass: '',
      height: '16',
      width: '17',
    },
    {
      id: 4,
      label: 'Itineraries',
      iconPath: ICONS.itineraries,
      clickedIconPath: ICONS.itinerariesRed,
      routerLink: '/itineraries',
      cssClass: '',
      height: '16',
      width: '17',
    },
    {
      id: 5,
      label: 'Profile',
      iconPath: ICONS.user,
      clickedIconPath: ICONS.userRed,
      routerLink: '/profile',
      cssClass: '',
      height: '16',
      width: '17',
    },
  ];
}
