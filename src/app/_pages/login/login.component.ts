import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');

  constructor() {}

  ngOnInit(): void {}

  handleSubmit() {
    console.log(this.email.value, this.password.value);
  }
}
