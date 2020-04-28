import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;

  constructor(private apiService: ApiService) { }

  async signUp(username: any, password: any) {
    const responce = this.apiService.post('auth/signup', { username, password });

    return await responce;
  }

  async login() {

    // tslint:disable-next-line: prefer-const
    let loginData: {
      username: 'test',
      password: 'password'
    };

    await this.apiService.post('auth/signup', loginData);

    const responce = await this.apiService.post('auth/login', loginData);

    localStorage.setItem('token', this.token);
  }

  getToken() {
    return this.token;
  }

  isAuthorized() {
    if (this.token !== null) {
      return true;
    } else {
      return false;
    }
  }
}
