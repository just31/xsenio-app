import { NgModule } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';

import { CountComponent } from './count.component';


const routes: Routes = [
  { path: '', component: CountComponent }
];

@NgModule({
  declarations: [CountComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MDBBootstrapModule
  ],
  providers: []
})
export class CountModule {}


