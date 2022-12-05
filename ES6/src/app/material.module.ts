import { NgModule } from '@angular/core';

import {
  MatRippleModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatDialogModule
} from '@angular/material';

let MAT_MODULES = [
  MatRippleModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatDialogModule
];

@NgModule({
  imports: MAT_MODULES,
  exports: MAT_MODULES,
})
export class MaterialModule {}
