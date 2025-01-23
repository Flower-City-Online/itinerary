import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItinerariesComponent } from './itineraries.component';
import { BuilderComponent } from './pages/builder/builder.component';
import { MapAreaComponent } from './pages/builder/components/map-area/map-area.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

const routes: Routes = [
  {
    path: '',
    component: ItinerariesComponent,
    children: [
      { path: '', redirectTo: 'explore', pathMatch: 'full' },
      { path: 'explore', component: ExploreComponent },
      { path: 'builder', component: BuilderComponent },
      { path: 'favorites', component: FavoritesComponent },
    ],
  },
  { path: 'builder/map-area', component: MapAreaComponent },
  { path: 'comments', component: CommentsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItinerariesRoutingModule {}
