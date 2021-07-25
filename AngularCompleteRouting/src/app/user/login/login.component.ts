import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from './../../sevices/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  uname: string = 'SantoshB';
  password: string = 'Reddy123';

  profileForm = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(8)]],
    pwd: [null, [Validators.required, Validators.minLength(8)]]
  });
  constructor(private fb: FormBuilder,
    private custSevice: CustomerService,
    private router: Router) {
    console.log('Login Module loaded');
  }

  get f() {
    return this.profileForm.controls;
  }
  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    let gname = this.profileForm.value.name;
    let gpwd = this.profileForm.value.pwd;
    if (gname === this.uname && gpwd === this.password) {
      this.custSevice.setId('123AA');
      this.custSevice.setName(this.profileForm.value.name);
      this.router.navigate(['/products'])
    }else {
      alert('Username and Password should be SantoshB/Reddy123');
    }
  }

}
