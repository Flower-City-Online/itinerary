import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultDestinationComponent } from './pages/default-destination/default-destination.component';
import { ItineraryPreviewComponent } from './pages/itinerary-preview/itinerary-preview.component';
import { NonVisualMapFilterComponent } from './pages/non-visual-map-filter/non-visual-map-filter.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'itinerary-preview',
    pathMatch: 'full',
  },
  {
    path: 'non-visual-map-filter',
    component: NonVisualMapFilterComponent,
  },
  {
    path: 'itinerary-preview',
    component: ItineraryPreviewComponent,
  },
  {
    path: 'default-destination',
    component: DefaultDestinationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class PathwayRoutingModule {}
