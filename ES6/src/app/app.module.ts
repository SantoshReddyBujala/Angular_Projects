import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExpansionListComponent } from './expansion-list/expansion-list.component';
import { MatExpansionModule } from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatExpansionModule
  ],
  declarations: [AppComponent, ExpansionListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
