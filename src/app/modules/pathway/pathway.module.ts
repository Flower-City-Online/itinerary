import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonVisualMapFilterComponent } from './pages/non-visual-map-filter/non-visual-map-filter.component';
import { BottomModalComponent, ButtonsModule, LibModalModule } from 'nextsapien-component-lib';
import { ItineraryPreviewComponent } from './pages/itinerary-preview/itinerary-preview.component';
import { DefaultDestinationComponent } from './pages/default-destination/default-destination.component';
import { FormsModule } from '@angular/forms';
import {SharedModule} from "../../shared/shared.module";
import {PathwayRoutingModule} from "./pathway-routing.module";
import { PathwayComponent } from './pathway.component';
import {GooglemapdemoComponent} from "./components/googlemapdemo/googlemapdemo.component";
import {MapHeaderComponent} from "./components/map-header/map-header.component";
import { GoogleMap, MapBaseLayer, MapBicyclingLayer, MapCircle, MapDirectionsRenderer, MapGroundOverlay, MapHeatmapLayer, MapInfoWindow, MapKmlLayer, MapMarker, MapAdvancedMarker, MapMarkerClusterer, MapPolygon, MapPolyline, MapRectangle, MapTrafficLayer, MapTransitLayer, GoogleMapsModule } from '@angular/google-maps';
import {MatIcon} from "@angular/material/icon";
// import { BottomModalComponent, LibMapsComponent } from 'nextsapien-component-lib';

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
    GooglemapdemoComponent,
    MapHeaderComponent
  ],
  imports: [
    CommonModule,
    PathwayRoutingModule,
    SharedModule,
    ButtonsModule,
    FormsModule,
    GoogleMapsModule,
    MatIcon,
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PathwayModule { }
