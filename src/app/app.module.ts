import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {TranslateModule} from "@ngx-translate/core";
import {
  CircleProgressModule,
  DashedCheckboxModule,
  FormFieldModule,
  LibModalModule,
  RangeSelectorModule
} from "nextsapien-component-lib";
import {IonicModule} from "@ionic/angular";
import {ReactiveFormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    TranslateModule.forRoot(),
    LibModalModule,
    IonicModule,
    DashedCheckboxModule,
    CircleProgressModule,
    FormFieldModule,
    ReactiveFormsModule,
    RangeSelectorModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
