import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';

import { LoginComponent } from './login.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { LoginService } from './login.service';


const routes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService]
})
export class LoginModule {}


