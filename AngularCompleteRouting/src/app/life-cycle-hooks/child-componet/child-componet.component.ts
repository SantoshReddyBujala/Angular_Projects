import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-componet',
  templateUrl: './child-componet.component.html',
  styleUrls: ['./child-componet.component.sass']
})
export class ChildComponetComponent implements OnInit, OnChanges {

  @Input() data!:string;
  outputData:string = 'Child to Parent sharing';
    constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`currentValue: ${changes.data.currentValue} previousValue: ${changes?.data?.previousValue}`)
  }

  @Output() dataEvent = new EventEmitter<string>();
  
  ngOnInit(): void {
  }

  emitData=()=>{
    this.dataEvent.emit(this.outputData);
    console.log(this.outputData);
  }
}
