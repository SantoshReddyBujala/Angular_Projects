import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
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
  title = 'ES6';
  features: FEATURE[] = Features;
  animal: string;
  name: string;
  constructor(public dialog: MatDialog) {}

  featureDetails(id: number) {
    console.log(id);
    const dialogRef = this.dialog.open(ExpansionListComponent, {
      width: '250px',
      height:'300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

