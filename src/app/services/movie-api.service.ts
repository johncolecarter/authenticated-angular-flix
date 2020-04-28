import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class MovieApiService {

  constructor(private httpClient: HttpClient) { }
  url = 'https://api.themoviedb.org/3/';
  async get(path, options?): Promise<any> {
    return await this.httpClient.get(this.url + path + '&api_key=a917e025b6c202b9d096152592a6a5ad', options).toPromise();
  }

}
