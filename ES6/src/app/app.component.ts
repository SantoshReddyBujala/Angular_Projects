import { Component } from '@angular/core';
import Features from '../assets/features.json';

interface FEATURE {
  id: number;
  title: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'ES6';
  features: FEATURE[] = Features;
  featureDetails(id:number){
    console.log(id);
  }
}
