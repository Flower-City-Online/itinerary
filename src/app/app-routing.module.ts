import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "itineraries", pathMatch: "full" },
  {
    path: "itineraries",
    loadChildren: () =>
      import("./modules/itineraries/itineraries.module").then(
        (x) => x.ItinerariesModule
      ),
  },
  {
    path: "search",
    loadChildren: () =>
      import("./modules/search/search.module").then((x) => x.SearchModule),
  },
  {
    path: "archives",
    loadChildren: () =>
      import("./modules/archives/archives.module").then(
        (x) => x.ArchivesModule
      ),
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./modules/dashboard/dashboard.module").then(
        (x) => x.DashboardModule
      ),
  },
  {
    path: "pathway",
    loadChildren: () =>
      import("./modules/pathway/pathway.module").then((x) => x.PathwayModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
