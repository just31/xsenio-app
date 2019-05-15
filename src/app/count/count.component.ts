import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})

export class CountComponent implements OnInit {

  // We assign the initial and subsequent values ​​of the counter.
  public count: number = JSON.parse(localStorage.getItem('count')) ? JSON.parse(localStorage.getItem('count')) : 0;
  public countNext: number = JSON.parse(localStorage.getItem('count_next')) ? JSON.parse(localStorage.getItem('count_next')) : 2;

  constructor(private router: Router) {
  }

  // Save value counter to localstorage.
  private setLocale_storage(): any {
    localStorage.setItem('count', JSON.stringify(this.count));
    localStorage.setItem('count_next', JSON.stringify(this.countNext));

    this.count = JSON.parse(localStorage.getItem('count'));
    this.countNext = JSON.parse(localStorage.getItem('count_next'));
  }

  // Show current and subsequent value of the counter.
  show(): any {
    if (this.count <= 1) {
      this.count = JSON.parse(localStorage.getItem('count')) + 1;
      this.countNext = JSON.parse(localStorage.getItem('count')) + 2;
    }

    if (this.count > 1) {
      this.count = JSON.parse(localStorage.getItem('count'));
      this.countNext = JSON.parse(localStorage.getItem('count')) * 2;
    }
  }

  // Increase the current and subsequent value by 2. Save the new value in localstorage.
  increment(ev): any {
    if (this.count === 1) {
      this.count = JSON.parse(localStorage.getItem('count')) + 2;
      this.countNext = JSON.parse(localStorage.getItem('count')) + 2;

      this.setLocale_storage();
    } else {
      this.count = JSON.parse(localStorage.getItem('count')) * 2;
      this.countNext = JSON.parse(localStorage.getItem('count')) * 2;

      this.setLocale_storage();
    }
  }

  logout(ev): any {
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('', {skipLocationChange: true});
  }

  // Reset the counter.
  noIncrement(ev): any {
    localStorage.removeItem('count');
    localStorage.removeItem('count_next');

    this.count = 0;
    this.countNext = 2;
  }

  ngOnInit() {
    function supports_html5_storage() {
      try {
        return 'localStorage' in window && window.localStorage !== null;
      } catch (e) {
        return false;
      }
    }

    // If the browser supports local storage, load the initial counter value onto the page.
    if (supports_html5_storage()) {
      this.setLocale_storage();
    } else {
      alert('Your browser does not support localestorage.');
    }

  }
}
