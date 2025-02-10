import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { MatIcon } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import {
  ButtonsModule,
  DashedCheckboxModule,
  FormFieldModule,
  LibMapModule,
  LibModalModule,
  SearchBarModule,
  SelectableModule,
  TextBoxComponent,
} from 'nextsapien-component-lib';
import { environment } from 'src/environments/environment';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { DeleteItinerariesComponent } from './components/delete-itineraries/delete-itineraries.component';
import { FilterMenuComponent } from './components/filter-menu/filter-menu.component';
import { ReportItineraryModalComponent } from './components/report-itinerary-modal/report-itinerary-modal.component';
import { ItinerariesRoutingModule } from './itineraries-routing.module';
import { ItinerariesComponent } from './itineraries.component';
import { BranchedItinerariesComponent } from './pages/branched-itineraries/branched-itineraries.component';
import { BuilderComponent } from './pages/builder/builder.component';
import { CreateItineraryModalItemComponent } from './pages/builder/components/create-itinerary-modal-item/create-itinerary-modal-item.component';
import { CreateItineraryModalComponent } from './pages/builder/components/create-itinerary-modal/create-itinerary-modal.component';
import { CreateItineraryComponent } from './pages/builder/components/create-itinerary/create-itinerary.component';
import { ExploreListComponent } from './pages/explore/components/explore-list/explore-list.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { MapComponent } from './pages/itinerary-detail/components/map/map.component';
import { SummaryComponent } from './pages/itinerary-detail/components/summary/summary.component';
import { ItineraryDetailComponent } from './pages/itinerary-detail/itinerary-detail.component';
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
    BranchedItinerariesComponent,
    ItineraryDetailComponent,
    SummaryComponent,
    MapComponent,
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
    TranslateModule,
    SearchBarModule,
    GoogleMapsModule,
    MatIcon,
    LibMapModule.forRoot({
      googleMapsKey: environment.googleMapsKey,
      googleMapsURL: environment.googleMapsURL,
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [GoogleMap],
})
export class ItinerariesModule {}
