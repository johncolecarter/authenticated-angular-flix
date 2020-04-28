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

  async login(username, password) {

    const responce = await this.apiService.post('auth/login', { username, password });
    this.token = responce.token;
    console.log(responce.message);

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
