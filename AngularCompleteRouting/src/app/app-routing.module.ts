import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {
    path: 'login',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },  
  {
    path: 'contentprojection',
    loadChildren: () => import('./content-projection/content-projection.module').then(m => m.ContentProjectionModule)
  },  
  {
    path: 'lifecycle',
    loadChildren: () => import('./life-cycle-hooks/life-cycle-hooks.module').then(m => m.LifeCycleHooksModule)
  },
  {path:'**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
