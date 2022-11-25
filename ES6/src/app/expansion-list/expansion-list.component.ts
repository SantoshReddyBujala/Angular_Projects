import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion-list',
  templateUrl: './expansion-list.component.html',
  styleUrls: ['./expansion-list.component.less']
})
export class ExpansionListComponent {

  items: string[] = [ "Item 1", "Item 2", "Item 3", "Item 4"];
  toggle:any[] = [];
}
