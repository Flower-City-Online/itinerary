import { HttpBackend, HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { IonicModule } from "@ionic/angular";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import {
  ButtonsModule,
  CircleProgressModule,
  DashedCheckboxModule,
  FormFieldModule,
  LibModalModule,
  RangeSelectorModule, ToggleModule,
} from 'nextsapien-component-lib';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BottomModalDemoComponent } from "./components/bottom-modal-demo/bottom-modal-demo.component";
import { ButtonsDemoComponent } from "./components/buttons-demo/buttons-demo.component";
import { PopupModalDemoComponent } from "./components/popup-modal-demo/popup-modal-demo.component";
import { RangeSelectorDemoComponent } from "./components/range-selector-demo/range-selector-demo.component";
import { CoreModule } from "./core/core.module";
import { MatDialogModule } from '@angular/material/dialog';
export const httpLoaderFactory = (http: HttpBackend): TranslateHttpLoader =>
  new TranslateHttpLoader(new HttpClient(http), "./assets/i18n/", ".json");
@NgModule({
  declarations: [
    AppComponent,
    RangeSelectorDemoComponent,
    PopupModalDemoComponent,
    BottomModalDemoComponent,
    ButtonsDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    TranslateModule.forRoot({
      defaultLanguage: "en",
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpBackend],
      },
    }),
    // TranslateModule.forRoot(),
    IonicModule.forRoot(),
    LibModalModule,
    // IonicModule,
    // DashedCheckboxModule,
    // CircleProgressModule,
    // FormFieldModule,
    // ReactiveFormsModule,
    // RangeSelectorModule,
    ButtonsModule,
    FormsModule,
    ReactiveFormsModule,
    LibModalModule,
    ToggleModule,
    RangeSelectorModule,
    MatDialogModule,
    LibModalModule,
  ],
  providers: [provideAnimationsAsync()],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
