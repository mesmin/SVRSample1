import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientEditComponent } from './client-edit.component';
import { ClientEditRoutingModule } from './client-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ClientEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ClientEditComponent
  ]
})
export class ClientEditModule { }
