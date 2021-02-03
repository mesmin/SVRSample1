import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list.component';
import { ClientListRoutingModule } from './client-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ClientListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ClientListComponent
  ]
})
export class ClientListModule { }
