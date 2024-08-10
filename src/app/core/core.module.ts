import { NgForOf, NgOptimizedImage } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ButtonsModule, LibTabMenuModule } from "nextsapien-component-lib";
import { SharedModule } from "../shared/shared.module";
import { BottomNavigationItemsComponent } from "./components/footer/components/bottom-navigation-items/bottom-navigation-items.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { TabBarComponent } from "./components/tab-bar/tab-bar.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TabBarComponent,
    BottomNavigationItemsComponent,
  ],
  exports: [
    TabBarComponent,
    HeaderComponent,
    FooterComponent,
    BottomNavigationItemsComponent,
  ],
  imports: [
    LibTabMenuModule,
    ButtonsModule,
    SharedModule,
    NgOptimizedImage,
    NgForOf,
    RouterLink,
  ],
})
export class CoreModule {}
