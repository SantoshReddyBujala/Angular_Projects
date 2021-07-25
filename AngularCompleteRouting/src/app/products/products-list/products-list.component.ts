import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../../sevices/customer.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {
  testData: any;
  errorMessage: any;
  uname!:String;
  pwd!:String;

  constructor(private custSevice: CustomerService,
    private http: HttpClient) {
    console.log('Products Module loaded');
  }

  ngOnInit(): void {
    this.uname = `User name: ${this.custSevice.getName()}`;
    this.pwd = `User Id: ${this.custSevice.getId()}`;
    this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe({
        next: data => {
            this.testData = data.total;
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    })
  }
}
