import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { IBottomNavigationList } from 'src/app/interface/bottomNavigationList';
import { BottomNavigationService } from 'src/app/services/core/bottom-navigation.service';
import { ShadowRootHandlerService } from 'src/app/services/core/shadow-root-handler.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FooterComponent implements OnInit, AfterViewInit {
  public enableBack: boolean = false;

  constructor(
    private el: ElementRef,
    private shadowrootHandler: ShadowRootHandlerService,
    public bottomNavigationService: BottomNavigationService,
    public cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    const selectedElement = this.bottomNavigationService.bottomNavList.find(
      (nav) => nav.selected,
    );
    if (selectedElement) {
      this.bottomNavigationService.onNavigationChange(
        this.bottomNavigationService.bottomNavList,
        selectedElement,
      );
    }
    this.enableBack = true;
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    this.initShadowrootHandler();
  }

  navigate(
    bottomNavList: IBottomNavigationList[],
    item: IBottomNavigationList,
  ): void {
    this.bottomNavigationService.onNavigationChange(bottomNavList, item);
  }

  initShadowrootHandler(): void {
    const targetNode = this.el.nativeElement;
    this.shadowrootHandler.accessShadowRoot(
      targetNode,
      'lib-bottom-modal',
      () => {
        this.applyStylesToDialog();
      },
    );
  }

  applyStylesToDialog(): void {
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
}
