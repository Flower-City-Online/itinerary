import { HttpBackend, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { IonicModule } from '@ionic/angular';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  ButtonsModule,
  LibModalModule,
  RangeSelectorModule,
  ToggleModule,
} from 'nextsapien-component-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './core/components/milestone-4/page1/page1.component';
import { CoreModule } from './core/core.module';
export const httpLoaderFactory = (http: HttpBackend): TranslateHttpLoader =>
  new TranslateHttpLoader(new HttpClient(http), './assets/i18n/', '.json');
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpBackend],
      },
    }),
    IonicModule.forRoot(),
    LibModalModule,
    ButtonsModule,
    FormsModule,
    ReactiveFormsModule,
    LibModalModule,
    ToggleModule,
    RangeSelectorModule,
    MatDialogModule,
    LibModalModule,
    Page1Component,
  ],
  providers: [provideAnimationsAsync()],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
