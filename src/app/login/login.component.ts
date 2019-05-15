import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router, private loginService: LoginService) {}

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

    if (localStorage.getItem('currentUser')) {
      this.router.navigateByUrl('/count', {skipLocationChange: true});
    }
  }

}
