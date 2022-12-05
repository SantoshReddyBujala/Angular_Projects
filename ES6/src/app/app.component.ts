import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import Features from '../assets/features.json';
import { ExpansionListComponent } from './expansion-list/expansion-list.component';

interface FEATURE {
  id: number;
  title: string;
}

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'ES6 Features';
  features: FEATURE[] = Features;
  animal: string;
  name: string;
  constructor(public dialog: MatDialog) {}

  featureDetails(id: number) {
    console.log(id);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
  };
    this.dialog.open(ExpansionListComponent, dialogConfig);
  }
}

