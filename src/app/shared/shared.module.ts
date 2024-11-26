import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
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
import { CustomHeadingWithButtonComponent } from './components/custom-heading-with-button/custom-heading-with-button.component';
import { CutomCardComponent } from './components/cutom-card/cutom-card.component';
import { ModalBottomBarComponent } from './components/modal-bottom-bar/modal-bottom-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SectionSepraterComponent } from './components/section-seprater/section-seprater.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    CardComponent,
    ModalBottomBarComponent,
    SectionSepraterComponent,
    CustomHeadingWithButtonComponent,
    CutomCardComponent,
  ],
  exports: [
    SearchBarComponent,
    CardComponent,
    ModalBottomBarComponent,
    SectionSepraterComponent,
    CustomHeadingWithButtonComponent,
    CutomCardComponent,
  ],
  imports: [
    TranslateModule,
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
