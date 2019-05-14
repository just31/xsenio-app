import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {User} from '../model/user';

@Injectable()
export class LoginService {

  errText = true;

  constructor(private router: Router, private http: HttpClient) {
  }

  // Send a request to api at the specified url.
  // Process the data. Save the received jwt-token in local storage.
  // Redirect to the internal pages of the application, if we received the correct token.
  login(dataForm) {
    return this.http.post<User>('http://localhost:3000/api/v1/users/', dataForm)
      .subscribe((data: any) => {

      console.log(data);

      if (data.login === false) {

        this.errText = data.login;

      } else {

        localStorage.setItem('currentUser', JSON.stringify(data));

        this.router.navigateByUrl('/count', { skipLocationChange: true });

        this.errText = true;
      }
    }, error => {
      console.log('There was an error generating the proper GUID on the server', error);
    });
  }
}
