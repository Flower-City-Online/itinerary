import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons-demo',
  templateUrl: './buttons-demo.component.html',
  styleUrls: ['./buttons-demo.component.scss'],
})
export class ButtonsDemoComponent {
  public primaryBtnCode: string = `<lib-primary-btn>primary button </lib-primary-btn>`;
  public primaryBtnCodeDisabled: string = `<lib-primary-btn [disabled]="true">primary Disabled</lib-primary-btn>`;
  public primaryBtnCodesShowArrowIcon: string = `<lib-primary-btn [showArrowIcon]="true">Primary with Icon</lib-primary-btn>`;
  public primaryBtnCodeHoverOutline: string = `<lib-primary-btn [hoverOutline]="true">primary button Hover</lib-primary-btn>`;
  public secondaryBtnCode: string = `<lib-secondary-btn>secondary button</lib-secondary-btn>`;
  public secondaryBtnDisabledCode: string = `<lib-secondary-btn [disabled]="true">secondary Disabled</lib-secondary-btn>`;
  public secondaryBtnShowArrowIconCode: string = `<lib-secondary-btn [showArrowIcon]="true">secondary with Icon</lib-secondary-btn>`;
  public listBtnCode: string = `<lib-list-btn>List button</lib-list-btn>`;
  public listBtnWithLabelCode: string = `<lib-list-btn [hideActionIcon]="true" [actionLabel]="'action'">List btn with action label</lib-list-btn>`;
  public iconBtnCode: string = `<lib-icon-btn><img src="assets/icons/back.svg"  alt='back-btn'/></lib-icon-btn>`;
  public btnWithLabelCode: string = `<lib-primary-btn [label]="'Cyrano Plus'">Set advanced pref...</lib-primary-btn>`;
  public btnHoverCode: string = `<lib-hover-btn [iconUrl]="'assets/icons/guru-times-icon.svg'">Hover Button</lib-hover-btn>`;
}
