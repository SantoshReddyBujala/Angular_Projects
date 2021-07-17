import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Custom Components imports
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';

//Angular Material imports
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
];

@NgModule({
  declarations: [
    ProductAddComponent,
    ProductListComponent
  ],
  imports: [RouterModule.forChild(routes), // child route added
    MatCardModule,
    MatFormFieldModule],
  exports: [RouterModule]
})
export class ProductsModule { }
