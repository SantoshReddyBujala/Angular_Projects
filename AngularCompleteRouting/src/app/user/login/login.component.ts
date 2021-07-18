import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  
  profileForm = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(8)]],
    pwd: [null, [Validators.required, Validators.minLength(8)]]
  });
  constructor(private fb: FormBuilder) {
    console.log('Login Module loaded');
   }

   get f(){
    return this.profileForm.controls;
  }
  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
