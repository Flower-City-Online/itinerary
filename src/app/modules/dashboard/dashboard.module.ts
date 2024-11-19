import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { ButtonsModule } from 'nextsapien-component-lib';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { ItinerariesModule } from '../itineraries/itineraries.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MainDashboardComponent } from './pages/main-dashboard/main-dashboard.component';

@NgModule({
  declarations: [
    MainDashboardComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgOptimizedImage,
    CoreModule,
    ItinerariesModule,
    ButtonsModule,
    TranslateModule,
  ],
})
export class DashboardModule {}
