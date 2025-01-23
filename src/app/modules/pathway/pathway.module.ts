import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  GoogleMap,
  GoogleMapsModule,
  MapAdvancedMarker,
  MapBaseLayer,
  MapBicyclingLayer,
  MapCircle,
  MapDirectionsRenderer,
  MapGroundOverlay,
  MapHeatmapLayer,
  MapInfoWindow,
  MapKmlLayer,
  MapMarker,
  MapMarkerClusterer,
  MapPolygon,
  MapPolyline,
  MapRectangle,
  MapTrafficLayer,
  MapTransitLayer,
} from '@angular/google-maps';
import { MatIcon } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import {
  ButtonsModule,
  InputFieldModule,
  LibMapModule,
  LibTabMenuModule,
  RangeSelectorModule,
  SearchBarModule,
  ToggleModule,
} from 'nextsapien-component-lib';
import { environment } from 'src/environments/environment';
import { SharedModule } from '../../shared/shared.module';
import { ItinerariesModule } from '../itineraries/itineraries.module';
import { GooglemapComponent } from './components/googlemap/googlemap.component';
import { MapHeaderComponent } from './components/map-header/map-header.component';
import { AddPlacesFooterComponent } from './pages/add-places-footer/add-places-footer.component';
import { DefaultDestinationComponent } from './pages/default-destination/default-destination.component';
import { ItineraryPreviewComponent } from './pages/itinerary-preview/itinerary-preview.component';
import { MemberDetailComponent } from './pages/member-detail/member-detail.component';
import { NonVisualMapFilterComponent } from './pages/non-visual-map-filter/non-visual-map-filter.component';
import { PlacesFooterComponent } from './pages/places-footer/places-footer.component';
import { RouteRadiusFooterComponent } from './pages/route-radius-footer/route-radius-footer.component';
import { RouteTypeFooterComponent } from './pages/route-type-footer/route-type-footer.component';
import { SearchLocationComponent } from './pages/search-location/search-location.component';
import { UserSearchComponent } from './pages/user-search/user-search.component';
import { PathwayRoutingModule } from './pathway-routing.module';
import { PathwayComponent } from './pathway.component';

const COMPONENTS = [
  GoogleMap,
  MapBaseLayer,
  MapBicyclingLayer,
  MapCircle,
  MapDirectionsRenderer,
  MapGroundOverlay,
  MapHeatmapLayer,
  MapInfoWindow,
  MapKmlLayer,
  MapMarker,
  MapAdvancedMarker,
  MapMarkerClusterer,
  MapPolygon,
  MapPolyline,
  MapRectangle,
  MapTrafficLayer,
  MapTransitLayer,
];

@NgModule({
  declarations: [
    NonVisualMapFilterComponent,
    ItineraryPreviewComponent,
    DefaultDestinationComponent,
    PathwayComponent,
    GooglemapComponent,
    MapHeaderComponent,
    SearchLocationComponent,
    RouteTypeFooterComponent,
    RouteRadiusFooterComponent,
    PlacesFooterComponent,
    AddPlacesFooterComponent,
    UserSearchComponent,
    MemberDetailComponent,
  ],
  imports: [
    TranslateModule,
    CommonModule,
    PathwayRoutingModule,
    SharedModule,
    ButtonsModule,
    FormsModule,
    GoogleMapsModule,
    MatIcon,
    InputFieldModule,
    ItinerariesModule,
    InputFieldModule,
    RangeSelectorModule,
    ReactiveFormsModule,
    ToggleModule,
    LibTabMenuModule,
    SearchBarModule,
    LibMapModule.forRoot({
      googleMapsKey: environment.googleMapsKey,
      googleMapsURL: environment.googleMapsURL,
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PathwayModule {}
