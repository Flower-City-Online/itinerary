import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuilderComponent } from './pages/builder/builder.component';
import { MapAreaComponent } from './pages/builder/components/map-area/map-area.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

const routes: Routes = [
  {
    path: '',
    component: CommentsComponent,
    children: [
      { path: '', redirectTo: 'explore', pathMatch: 'full' },
      { path: 'explore', component: CommentsComponent },
      { path: 'builder', component: BuilderComponent },
      { path: 'favorites', component: FavoritesComponent },
    ],
  },
  { path: 'builder/map-area', component: MapAreaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItinerariesRoutingModule {}
