import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpSingleViewComponent } from './cp-single-view/cp-single-view.component';
import { CpViewComponent } from './cp-view/cp-view.component';
import { RouterModule, Routes } from '@angular/router';
import { CpMultiViewComponent } from './cp-multi-view/cp-multi-view.component';
import { CpConditionalViewComponent } from './cp-conditional-view/cp-conditional-view.component';
import { CpSingleContentComponent } from './cp-single-content/cp-single-content.component';
import { CpMultiContentComponent } from './cp-multi-content/cp-multi-content.component';

const routes: Routes = [
  { path: '', component: CpViewComponent },
  {
    path: 'contentprojection/single', // child route path
    component: CpSingleViewComponent, // child route component that the router renders
  },
  {
    path: 'contentprojection/multi',
    component: CpMultiViewComponent, // another child route component that the router renders
  },
  {
    path: 'contentprojection/condi',
    component: CpConditionalViewComponent, // another child route component that the router renders
  }

];

@NgModule({
  declarations: [
    CpViewComponent,
    CpSingleContentComponent,
    CpSingleViewComponent,
    CpConditionalViewComponent,
    CpMultiViewComponent,
    CpMultiContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContentProjectionModule { }
