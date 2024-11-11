import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ICONS } from 'src/app/constants/constants';
import { ShadowRootHandlerService } from 'src/app/services/core/shadow-root-handler.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrl: './filter-menu.component.scss',
})
export class FilterMenuComponent implements OnInit, AfterViewInit {
  @Input() cssClass!: string;
  ICONS = ICONS;
  constructor(
    private shadowRootHandlerService: ShadowRootHandlerService,
    private el: ElementRef,
  ) {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.initShadowrootHandler();
  }
  options = [
    { label: 'Featured', value: '1' },
    { label: 'Hot', value: '2' },
    { label: 'Best', value: '3' },
    { label: 'New', value: '4' },
  ];
  formGroup = new FormGroup({
    filter: new FormControl(this.options[0].value),
  });

  changeSelection() {
    // @ts-ignore
  }

  initShadowrootHandler() {
    const targetNode = this.el.nativeElement; // Get the root element for querying

    // Apply styles to the nested shadow DOM elements
    this.shadowRootHandlerService.accessShadowRoot(
      targetNode,
      'lib-selectable',
      () => {
        this.applyStylesToFilterMenuItem();
      },
    );
  }
  applyStylesToFilterMenuItem() {
    const targetNode = this.el.nativeElement.querySelector(
      'lib-selectable',
    ) as HTMLElement;

    if (targetNode) {
      const classNameElements = targetNode.getElementsByClassName(
        'selectable-container',
      );

      if (classNameElements.length > 0) {
        const dialogDiv =
          classNameElements[0].getElementsByClassName('btn-selectable');

        if (dialogDiv.length > 0) {
          const dialogDivArray = Array.from(dialogDiv) as HTMLElement[];
          for (const div of dialogDivArray) {
            // Access the shadow root and query for the button
            const shadowAccessor = div.shadowRoot?.querySelector(
              'button',
            ) as HTMLElement;

            if (shadowAccessor) {
              // Apply styles to the button
              shadowAccessor.style.background = 'none';
            } else {
            }
          }
        } else {
        }
      } else {
      }
    } else {
    }
  }
}
