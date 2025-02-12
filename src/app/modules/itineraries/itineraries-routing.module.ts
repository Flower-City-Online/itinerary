import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItenariesRoutesEnum } from 'src/app/enums/ItenariesRoutes.enum';
import { BuilderComponent } from './pages/builder/builder.component';
import { CommentsPageComponent } from './pages/comments/comments-page.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { FriendRequestsComponent } from './pages/friend-requests/friend-requests.component';
import { HandleUpdateCommentRequestComponent } from './pages/handle-update-comment-request/handle-update-comment-request.component';
import { InvitePeopleComponent } from './pages/invite-people/invite-people.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { StoryComponent } from './pages/stories/story.component';
import { TotalMembersComponent } from './pages/total-members/total-members.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: ItenariesRoutesEnum.EXPLORE,
    pathMatch: 'full',
  },
  { path: ItenariesRoutesEnum.EXPLORE, component: ExploreComponent },
  { path: ItenariesRoutesEnum.BUILDER, component: BuilderComponent },
  { path: ItenariesRoutesEnum.FAVORITES, component: FavoritesComponent },
  { path: ItenariesRoutesEnum.STORIES, component: StoryComponent },
  {
    path: ItenariesRoutesEnum.COMMENTS_ROUTE,
    component: CommentsPageComponent,
  },
  {
    path: ItenariesRoutesEnum.NOTIFICATIONS,
    component: NotificationsComponent,
  },
  {
    path: ItenariesRoutesEnum.COMMENT_UPDATE_REQUEST,
    component: HandleUpdateCommentRequestComponent,
  },
  { path: ItenariesRoutesEnum.TOTAL_MEMBERS, component: TotalMembersComponent },
  { path: ItenariesRoutesEnum.INVITE_PEOPLE, component: InvitePeopleComponent },
  {
    path: ItenariesRoutesEnum.FRIEND_REQUESTS,
    component: FriendRequestsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItinerariesRoutingModule {}
