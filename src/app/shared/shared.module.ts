import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {
  ButtonsModule,
  CircleProgressModule,
  ContentViewCardModule,
  DashedCheckboxModule,
  FormFieldModule,
  FormGeneratorModule,
  GridModule,
  ImageCardModule,
  InfoCardListModule,
  InfoCardModule,
  InfoCardPlaceholderModule,
  InputDateFieldModule,
  LibMapModule,
  LibModalModule,
  LibTabMenuModule,
  OtpInputModule,
  PopperModule,
  SearchBarModule,
} from 'nextsapien-component-lib';
import { CardComponent } from './components/card-component/card-component.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomHeadingWithButtonComponent } from './components/custom-heading-with-button/custom-heading-with-button.component';
import { CustomMenuComponent } from './components/custom-menu/custom-menu.component';
import { CutomCardComponent } from './components/cutom-card/cutom-card.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { ModalBottomBarComponent } from './components/modal-bottom-bar/modal-bottom-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SectionSepraterComponent } from './components/section-seprater/section-seprater.component';

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
    CustomMenuComponent,
    CutomCardComponent,
  ],
  exports: [
    SearchBarComponent,
    CardComponent,
    IconButtonComponent,
    ModalBottomBarComponent,
    SectionSepraterComponent,
    CustomHeadingWithButtonComponent,
    DeleteModalComponent,
    CutomCardComponent,
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
    ContentViewCardModule,
  ],
})
export class SharedModule {}
