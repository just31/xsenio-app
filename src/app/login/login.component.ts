import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

// Import the service receiving data from the nodejs server.
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  // Create Reactive Form Fields model.
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private loginService: LoginService) {}

  errText: boolean;

  // Customize login functionality.
  login() {

    const val = this.loginForm.value;

    const data = {
      username: val.username,
      password: val.password
    };

    if (val.username !== '' && val.password !== '') {
      this.loginService.login(data);
    }

    this.errText = this.loginService.errText;
    if (val.username === '' || val.password === '') {
      this.errText = false;
    }

  }

  ngOnInit() {
    // console.log(this.loginService.errText);
  }

}
