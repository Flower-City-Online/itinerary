import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BottomModalDemoComponent } from "./components/bottom-modal-demo/bottom-modal-demo.component";
import { ButtonsDemoComponent } from "./components/buttons-demo/buttons-demo.component";
import { PopupModalDemoComponent } from "./components/popup-modal-demo/popup-modal-demo.component";
import { RangeSelectorDemoComponent } from "./components/range-selector-demo/range-selector-demo.component";
import { ArchivesComponent } from "./modules/archives/archives.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { ItinerariesComponent } from "./modules/itineraries/itineraries.component";
import { PathwayComponent } from "./modules/pathway/pathway.component";
import { SearchComponent } from "./modules/search/search.component";

const routes: Routes = [
  { path: "", redirectTo: "itineraries", pathMatch: "full" },
  {
    path: "itineraries",
    component: ItinerariesComponent,
    loadChildren: () =>
      import("./modules/itineraries/itineraries.module").then(
        (x) => x.ItinerariesModule
      ),
  },
  {
    path: "search",
    component: SearchComponent,
    loadChildren: () =>
      import("./modules/search/search.module").then((x) => x.SearchModule),
  },
  {
    path: "archives",
    component: ArchivesComponent,
    loadChildren: () =>
      import("./modules/archives/archives.module").then(
        (x) => x.ArchivesModule
      ),
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    loadChildren: () =>
      import("./modules/dashboard/dashboard.module").then(
        (x) => x.DashboardModule
      ),
  },
  {
    path: "pathway",
    component: PathwayComponent,
    loadChildren: () =>
      import("./modules/pathway/pathway.module").then((x) => x.PathwayModule),
  },
  { path: "range", component: RangeSelectorDemoComponent },
  { path: "bottom", component: BottomModalDemoComponent },
  { path: "popup", component: PopupModalDemoComponent },
  { path: "button", component: ButtonsDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
