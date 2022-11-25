import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ExpansionListComponent } from './expansion-list/expansion-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MaterialModule ],
  declarations: [ AppComponent, ExpansionListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
