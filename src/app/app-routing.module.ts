import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItinerariesComponent} from "./modules/itineraries/itineraries.component";
import {SearchComponent} from "./modules/search/search.component";
import {ArchivesComponent} from "./modules/archives/archives.component";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {PathwayComponent} from "./modules/pathway/pathway.component";

const routes: Routes = [
  { path: '', redirectTo: 'itineraries', pathMatch: 'full' },
  { path: 'itineraries', component: ItinerariesComponent, loadChildren: () => import('./modules/itineraries/itineraries.module').then(x => x.ItinerariesModule) },
  { path: 'search', component: SearchComponent, loadChildren: () => import('./modules/search/search.module').then(x => x.SearchModule) },
  { path: 'archives', component: ArchivesComponent, loadChildren: () => import('./modules/archives/archives.module').then(x => x.ArchivesModule) },
  { path: 'dashboard', component: DashboardComponent, loadChildren: () => import('./modules/dashboard/dashboard.module').then(x => x.DashboardModule) },
  { path: 'pathway', component: PathwayComponent, loadChildren: () => import('./modules/pathway/pathway.module').then(x => x.PathwayModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
