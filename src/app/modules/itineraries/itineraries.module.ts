import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { ItinerariesRoutingModule } from './itineraries-routing.module';
import { ItinerariesComponent } from './itineraries.component';
import {CoreModule} from "../../core/core.module";
import { FilterMenuComponent } from './components/filter-menu/filter-menu.component';
import {AppModule} from "../../app.module";
import {
    BottomModalComponent,
    ButtonsModule, DashedCheckboxModule, FormFieldModule,
    LibModalModule,
    SearchBarModule,
    SelectableModule, TextBoxComponent
} from "nextsapien-component-lib";
import {ReactiveFormsModule} from "@angular/forms";
import { ExploreComponent } from './pages/explore/explore.component';
import { BuilderComponent } from './pages/builder/builder.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import {SharedModule} from "../../shared/shared.module";
import {CreateItineraryComponent} from "./pages/builder/components/create-itinerary/create-itinerary.component";
import {ReportItineraryModalComponent} from "./components/report-itinerary-modal/report-itinerary-modal.component";
import { CreateItineraryModalComponent } from './pages/builder/components/create-itinerary-modal/create-itinerary-modal.component';
import { CreateItineraryModalItemComponent } from './pages/builder/components/create-itinerary-modal-item/create-itinerary-modal-item.component';
import {TranslateModule} from "@ngx-translate/core";
import {ExploreListComponent} from "./pages/explore/components/explore-list/explore-list.component";
import { DeleteItinerariesComponent } from './components/delete-itineraries/delete-itineraries.component';
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
  exports: [
    FilterMenuComponent
  ],
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
    ]
})
export class ItinerariesModule { }
