import { NgModule } from '@angular/core';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
];

@NgModule({
  declarations: [
    ProductAddComponent,
    ProductListComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsModule { }
