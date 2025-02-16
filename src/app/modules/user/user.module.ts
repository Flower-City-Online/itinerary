import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { CoreModule } from "../../core/core.module";
import { SectionSeparatorComponent } from 'nextsapien-component-lib';
import { TagContainerComponent } from 'src/app/shared/components/tag-container/tag-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CoreModule,
    SectionSeparatorComponent,
    SharedModule,
    TranslateModule
]
})
export class UserModule { }
