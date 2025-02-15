import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import {
  BaseCardModule,
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
  LibToastrModule,
  NotificationsModule,
  OtpInputModule,
  PopperModule,
  SearchBarModule,
} from 'nextsapien-component-lib';
import { CardComponent } from './components/card-component/card-component.component';
import { CommentComponent } from './components/comment/comment.component';
import { CustomHeadingWithButtonComponent } from './components/custom-heading-with-button/custom-heading-with-button.component';
import { CustomStoryCardComponent } from './components/custom-story-card/custom-story-card.component';
import { CutomCardComponent } from './components/cutom-card/cutom-card.component';
import { ItineraryMemberComponent } from './components/itinerary-member/itinerary-member.component';
import { ItineraryPeopleComponent } from './components/itinerary-people/itinerary-people.component';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    CardComponent,
    CustomHeadingWithButtonComponent,
    CutomCardComponent,
    CustomStoryCardComponent,
    CommentComponent,
    NotificationComponent,
    ItineraryMemberComponent,
    ItineraryPeopleComponent,
  ],
  exports: [
    CardComponent,
    CustomHeadingWithButtonComponent,
    CutomCardComponent,
    CustomStoryCardComponent,
    CommentComponent,
    NotificationComponent,
    ItineraryMemberComponent,
    ItineraryPeopleComponent,
  ],
  imports: [
    BaseCardModule,
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
    NotificationsModule,
    LibToastrModule,
  ],
})
export class SharedModule {}
