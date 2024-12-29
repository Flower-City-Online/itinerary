import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultDestinationComponent } from './pages/default-destination/default-destination.component';
import { SearchLocationComponent } from './pages/search-location/search-location.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultDestinationComponent,
  },
  {
    path: 'location-search',
    component: SearchLocationComponent,
  },
  // {
  //   path: PathwayRoutesEnum.ItineraryPreview,
  //   component: ItineraryPreviewComponent,
  // },
  // {
  //   path: PathwayRoutesEnum.DefaultDestination,
  //   component: DefaultDestinationComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class PathwayRoutingModule {}
