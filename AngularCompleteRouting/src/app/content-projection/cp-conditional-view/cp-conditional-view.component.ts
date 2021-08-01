import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cp-conditional-view',
  templateUrl: './cp-conditional-view.component.html',
  styleUrls: ['./cp-conditional-view.component.sass']
})
export class CpConditionalViewComponent implements OnInit {

  constructor() { }
  details:Array<number>=[1,2,3];
  showNgTemplateContent:boolean =false;

  ngOnInit(): void {
  }

}
