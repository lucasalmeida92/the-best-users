import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class UserModule { }
