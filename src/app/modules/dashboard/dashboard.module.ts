import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainDashboardComponent } from './pages/main-dashboard/main-dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { ItinerariesModule } from '../itineraries/itineraries.module';
import { ButtonsModule } from 'nextsapien-component-lib';

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
  ],
})
export class DashboardModule {}
