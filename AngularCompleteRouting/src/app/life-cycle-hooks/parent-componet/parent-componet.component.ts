import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponetComponent } from '../child-componet/child-componet.component';

@Component({
  selector: 'app-parent-componet',
  templateUrl: './parent-componet.component.html',
  styleUrls: ['./parent-componet.component.sass']
})
export class ParentComponetComponent implements OnInit, AfterViewInit {

  userInput:string = 'Santosh';
  dataFromChild!: string;
  @ViewChild(ChildComponetComponent,{static:false}) child:any;

  constructor() { }
  ngAfterViewInit(): void {
    this.dataFromChild = this.child.outputData;
    console.log(this.dataFromChild);
  }

  ngOnInit(): void {
    this.logIt('OnInit');
    console.log(this.dataFromChild);
  }
  logIt = (msg: string) => console.log(`${msg}`)

  receiveData($event?:any){
    this.dataFromChild = $event;
    console.log(this.dataFromChild);
  }
}
