import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  name!: String;
  id!: String;

  constructor() { }

  getName = () => this.name;
  setName = (name: string) => this.name = name;

  getId=() =>this.id;
  setId = (id: string) => this.id = id;
}
