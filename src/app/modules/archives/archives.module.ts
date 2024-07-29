import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchivesRoutingModule } from './archives-routing.module';
import { ArchivesComponent } from './archives.component';
import { MainArchivesComponent } from './pages/main-archives/main-archives.component';
import {CoreModule} from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";
import { LibModalModule } from 'nextsapien-component-lib';
import { ItinerariesModule } from '../itineraries/itineraries.module';


@NgModule({
  declarations: [
    ArchivesComponent,
    MainArchivesComponent
  ],
  imports: [
    CommonModule,
    ArchivesRoutingModule,
    CoreModule,
    SharedModule,
    LibModalModule,
    ItinerariesModule,
  ],
})
export class ArchivesModule { }
