import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultDestinationComponent } from './pages/default-destination/default-destination.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultDestinationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class PathwayRoutingModule {}
