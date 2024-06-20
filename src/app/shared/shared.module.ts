import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {
  ButtonsModule,
  CircleProgressModule,
  DashedCheckboxModule,
  FormFieldModule,
  FormGeneratorModule,
  GridModule,
  ImageCardModule,
  InfoCardListModule,
  InfoCardModule, InfoCardPlaceholderModule, InputDateFieldModule, LibMapModule, LibModalModule, LibTabMenuModule,
  OtpInputModule, PopperModule,
  SearchBarModule
} from "nextsapien-component-lib";
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {CardComponent} from "./components/card-component/card-component.component";
import {IconButtonComponent} from "./components/icon-button/icon-button.component";
import {HttpClientModule} from "@angular/common/http";
import {IonicModule} from "@ionic/angular";
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { ModalBottomBarComponent } from './components/modal-bottom-bar/modal-bottom-bar.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { SectionSepraterComponent } from './components/section-seprater/section-seprater.component';
import { CustomHeadingWithButtonComponent } from './components/custom-heading-with-button/custom-heading-with-button.component';
import { CustomMenuComponent } from './components/custom-menu/custom-menu.component';


@NgModule({
  declarations: [
    SearchBarComponent,
    CardComponent,
    IconButtonComponent,
    DeleteModalComponent,
    ModalBottomBarComponent,
    CustomButtonComponent,
    SectionSepraterComponent,
    CustomHeadingWithButtonComponent,
    CustomMenuComponent
  ],
  exports: [
    SearchBarComponent,
    CardComponent,
    IconButtonComponent,
    ModalBottomBarComponent,
    SectionSepraterComponent,
    CustomHeadingWithButtonComponent,
  ],
  imports: [
    CommonModule,
    SearchBarModule,
    ButtonsModule,
    CircleProgressModule,
    OtpInputModule,
    DashedCheckboxModule,
    FormFieldModule,
    FormGeneratorModule,
    GridModule,
    ImageCardModule,
    InfoCardModule,
    InfoCardListModule,
    InfoCardPlaceholderModule,
    InputDateFieldModule,
    LibMapModule,
    PopperModule,
    SearchBarModule,
    HttpClientModule,
    NgOptimizedImage,
    LibTabMenuModule,
    LibModalModule,
    IonicModule,
  ]
})
export class SharedModule { }
