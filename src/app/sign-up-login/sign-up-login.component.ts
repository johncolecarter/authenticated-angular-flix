import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-login',
  templateUrl: './sign-up-login.component.html',
  styleUrls: ['./sign-up-login.component.css']
})
export class SignUpLoginComponent implements OnInit {

  user = {
    username: '',
    password: ''
  };

  notLoggedIn = true;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async login() {
    if (this.user.username === '' || this.user.password === '') {
      this.notLoggedIn = false;
    } else {
      await this.auth.login(this.user.username, this.user.password);

      this.router.navigate(['/main']);
    }
  }

  signUp() {
    this.auth.signUp(this.user.username, this.user.password);

    this.login();
  }

}
