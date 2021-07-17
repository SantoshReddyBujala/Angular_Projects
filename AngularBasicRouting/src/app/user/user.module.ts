import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom component import
import { LoginComponent } from './login/login.component';

// Angular Material imports
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [RouterModule.forChild(routes),
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule],
  exports: [RouterModule]
})
export class UserModule { }
