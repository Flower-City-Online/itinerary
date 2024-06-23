import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItinerariesComponent} from "./itineraries.component";
import {FilterMenuComponent} from "./components/filter-menu/filter-menu.component";
import {ExploreComponent} from "./pages/explore/explore.component";
import {BuilderComponent} from "./pages/builder/builder.component";
import {FavoritesComponent} from "./pages/favorites/favorites.component";

const routes: Routes = [
  {path:'',redirectTo:'explore',pathMatch:'full'},
  {path:'explore',component:ExploreComponent},
  {path:'builder',component:BuilderComponent},
  {path:'favorites',component:FavoritesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItinerariesRoutingModule { }
