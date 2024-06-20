import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from "./search.component";
import {MainSearchComponent} from "./pages/main-search/main-search.component";

const routes: Routes = [
  {path:'search',component:MainSearchComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
