import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuilderComponent } from './pages/builder/builder.component';
import { CommentsPageComponent } from './pages/comments/comments-page.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { StoryComponent } from './pages/stories/story.component';

const routes: Routes = [
  { path: '', redirectTo: 'explore', pathMatch: 'full' },
  { path: 'explore', component: ExploreComponent },
  { path: 'builder', component: BuilderComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'stories', component: StoryComponent },
  { path: 'comments', component: CommentsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItinerariesRoutingModule {}
