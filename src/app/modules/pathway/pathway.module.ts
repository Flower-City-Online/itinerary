import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
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
} from "@angular/google-maps";
import { MatIcon } from "@angular/material/icon";
import { ButtonsModule, LibMapModule } from "nextsapien-component-lib";
import { environment } from "src/environments/environment";
import { SharedModule } from "../../shared/shared.module";
import { GooglemapdemoComponent } from "./components/googlemapdemo/googlemapdemo.component";
import { MapHeaderComponent } from "./components/map-header/map-header.component";
import { DefaultDestinationComponent } from "./pages/default-destination/default-destination.component";
import { ItineraryPreviewComponent } from "./pages/itinerary-preview/itinerary-preview.component";
import { NonVisualMapFilterComponent } from "./pages/non-visual-map-filter/non-visual-map-filter.component";
import { PathwayRoutingModule } from "./pathway-routing.module";
import { PathwayComponent } from "./pathway.component";

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
    MapHeaderComponent,
  ],
  imports: [
    CommonModule,
    PathwayRoutingModule,
    SharedModule,
    ButtonsModule,
    FormsModule,
    GoogleMapsModule,
    MatIcon,
    LibMapModule.forRoot({
      googleMapsKey: environment.googleMapsKey,
      googleMapsURL: environment.googleMapsURL,
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PathwayModule {}
