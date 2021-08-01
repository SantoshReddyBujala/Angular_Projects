import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponetComponent } from './parent-componet/parent-componet.component';
import { ChildComponetComponent } from './child-componet/child-componet.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ParentComponetComponent }
];

@NgModule({
  declarations: [
    ParentComponetComponent,
    ChildComponetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LifeCycleHooksModule { }
