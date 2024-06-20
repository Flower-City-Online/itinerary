import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchChipsComponent } from './components/search-chips/search-chips.component';
import { RecentSearchesComponent } from './components/recent-searches/recent-searches.component';
import { QuickActionsComponent } from './components/quick-actions/quick-actions.component';
import {SharedModule} from "../../shared/shared.module";
import { MainSearchComponent } from './pages/main-search/main-search.component';
import {SectionSeparatorComponent} from "nextsapien-component-lib";
import { RecentSearchesListComponent } from './components/recent-searches-list/recent-searches-list.component';
import { RecentSearchesItemComponent } from './components/recent-searches-item/recent-searches-item.component';
import { SerachBottomBarComponent } from './components/serach-bottom-bar/serach-bottom-bar.component';
import { SerachClearHistoryComponent } from './components/serach-clear-history/serach-clear-history.component';


@NgModule({
  declarations: [
    SearchComponent,
    SearchChipsComponent,
    RecentSearchesComponent,
    QuickActionsComponent,
    MainSearchComponent,
    RecentSearchesListComponent,
    RecentSearchesItemComponent,
    SerachBottomBarComponent,
    SerachClearHistoryComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
    SectionSeparatorComponent,
    NgOptimizedImage
  ]
})
export class SearchModule { }
