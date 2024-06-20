import { NgModule } from '@angular/core';
import {CommonModule, NgForOf, NgOptimizedImage} from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import {LibTabMenuModule} from "nextsapien-component-lib";
import {SharedModule} from "../shared/shared.module";
import { BottomNavigationItemsComponent } from './components/footer/components/bottom-navigation-items/bottom-navigation-items.component';
import {RouterLink} from "@angular/router";



@NgModule({
    declarations: [
      HeaderComponent,
      FooterComponent,
        TabBarComponent,
        BottomNavigationItemsComponent
    ],
    exports: [
        TabBarComponent,
        HeaderComponent,
        FooterComponent,
        BottomNavigationItemsComponent,
    ],
  imports: [
    LibTabMenuModule,
    SharedModule,
    NgOptimizedImage,
    NgForOf,
    RouterLink
  ]
})
export class CoreModule { }
