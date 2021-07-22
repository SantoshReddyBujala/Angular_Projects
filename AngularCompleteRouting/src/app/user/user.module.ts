import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AppModule } from '../app.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';




const routes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [RouterModule.forChild(routes),
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule],
  exports: [RouterModule]
})
export class UserModule { }
