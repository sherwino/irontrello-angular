import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  newUser: any = {};

  errorMessage: string;

  constructor(
    private sessionThang: SessionService,
    private routerThang: Router
  ) { }

  ngOnInit() {
  }

  submitSignup() {
      this.sessionThang.signup(this.newUser)
        .then(() => {
            this.routerThang.navigate(['/lists']);
        })
        .catch((errResponse) => {
            const apiInfo = errResponse.json();
            this.errorMessage = apiInfo.message;
        })
  }

}
