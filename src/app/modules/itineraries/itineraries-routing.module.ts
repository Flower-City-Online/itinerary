import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuilderComponent } from './pages/builder/builder.component';
import { CommentsPageComponent } from './pages/comments/comments-page.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HandleUpdateCommentRequestComponent } from './pages/handle-update-comment-request/handle-update-comment-request.component';
import { InvitePeopleComponent } from './pages/invite-people/invite-people.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { StoryComponent } from './pages/stories/story.component';
import { TotalMembersComponent } from './pages/total-members/total-members.component';

const routes: Routes = [
  { path: '', redirectTo: 'explore', pathMatch: 'full' },
  { path: 'explore', component: ExploreComponent },
  { path: 'builder', component: BuilderComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'stories', component: StoryComponent },
  { path: 'comments', component: CommentsPageComponent },
  { path: 'notifications', component: NotificationsComponent },
  {
    path: 'update-comment-request',
    component: HandleUpdateCommentRequestComponent,
  },
  { path: 'total-members', component: TotalMembersComponent },
  { path: 'invite-people', component: InvitePeopleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItinerariesRoutingModule {}
