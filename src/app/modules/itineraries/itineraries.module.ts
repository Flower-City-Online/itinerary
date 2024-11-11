import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import {
  ButtonsModule,
  DashedCheckboxModule,
  FormFieldModule,
  LibModalModule,
  SelectableModule,
  TextBoxComponent,
} from 'nextsapien-component-lib';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { DeleteItinerariesComponent } from './components/delete-itineraries/delete-itineraries.component';
import { FilterMenuComponent } from './components/filter-menu/filter-menu.component';
import { ReportItineraryModalComponent } from './components/report-itinerary-modal/report-itinerary-modal.component';
import { ItinerariesRoutingModule } from './itineraries-routing.module';
import { ItinerariesComponent } from './itineraries.component';
import { BuilderComponent } from './pages/builder/builder.component';
import { CreateItineraryModalItemComponent } from './pages/builder/components/create-itinerary-modal-item/create-itinerary-modal-item.component';
import { CreateItineraryModalComponent } from './pages/builder/components/create-itinerary-modal/create-itinerary-modal.component';
import { CreateItineraryComponent } from './pages/builder/components/create-itinerary/create-itinerary.component';
import { ExploreListComponent } from './pages/explore/components/explore-list/explore-list.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
@NgModule({
  declarations: [
    ItinerariesComponent,
    FilterMenuComponent,
    ExploreComponent,
    BuilderComponent,
    FavoritesComponent,
    CreateItineraryComponent,
    ReportItineraryModalComponent,
    CreateItineraryModalComponent,
    CreateItineraryModalItemComponent,
    ExploreListComponent,
    DeleteItinerariesComponent,
  ],
  exports: [FilterMenuComponent, DeleteItinerariesComponent],
  imports: [
    CommonModule,
    ItinerariesRoutingModule,
    CoreModule,
    SelectableModule,
    ReactiveFormsModule,
    ButtonsModule,
    NgOptimizedImage,
    SharedModule,
    LibModalModule,
    FormFieldModule,
    TextBoxComponent,
    DashedCheckboxModule,
  ],
})
export class ItinerariesModule {}
