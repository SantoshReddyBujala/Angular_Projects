import { NgModule } from '@angular/core';

import {
  MatRippleModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
} from '@angular/material';

let MAT_MODULES = [
  MatRippleModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
];

@NgModule({
  imports: MAT_MODULES,
  exports: MAT_MODULES,
})
export class MaterialModule {}
