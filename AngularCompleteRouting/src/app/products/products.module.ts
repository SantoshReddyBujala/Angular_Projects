import { NgModule } from '@angular/core';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';


const routes: Routes = [
  { path: '', component: ProductsListComponent }
];

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductAddComponent
  ],
  imports: [RouterModule.forChild(routes),
    AngularMaterialModule],
  exports: [RouterModule]
})
export class ProductsModule { }
