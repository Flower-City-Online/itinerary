import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuilderComponent } from './pages/builder/builder.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ItenariesRoutesEnum } from 'src/app/enums/ItenariesRoutes.enum';
import { BranchedItinerariesComponent } from './pages/branched-itineraries/branched-itineraries.component';
import { AdvancedFilterComponent } from './pages/advanced-filter/advanced-filter.component';

const routes: Routes = [
  { path: '', redirectTo: 'explore', pathMatch: 'full' },
  { path: 'explore', component: ExploreComponent },
  { path: 'builder', component: BuilderComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: ItenariesRoutesEnum.BRANCHED_ITINERARIES, component: BranchedItinerariesComponent },
  { path: ItenariesRoutesEnum.ADVANCED_FILTER, component: AdvancedFilterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItinerariesRoutingModule {}
