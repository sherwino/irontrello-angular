import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private sessionThang: SessionService,
    private routerThang: Router
  ) { }

  ngOnInit() {
      this.sessionThang.checkLogin()
        // if logged in, redirect to /lists
        .then((userInfo) => {
            this.routerThang.navigate(['/lists']);
        })
        // else redirect to /
        .catch((err) => {
            this.routerThang.navigate(['/']);
        });
  }
}
