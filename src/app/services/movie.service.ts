import { Injectable } from '@angular/core';
import { MovieApiService } from './movie-api.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  searchResults: any[] = [];
  myMovieList: any[] = [];
  constructor(private movieApi: MovieApiService, private api: ApiService) { }

  getSearchResults() {
    return this.searchResults;
  }
  getMovieList() {
    return this.myMovieList;
  }
  async searchForMovies(searchTerm) {
    const response = await this.movieApi.get(`search/multi?query=${searchTerm}`);
    this.searchResults.length = 0;
    this.searchResults.push(...response.results);
  }
  async loadMovieList() {
    const results = await this.api.get(`movies`);
    this.myMovieList.length = 0;
    this.myMovieList.push(...results);
  }
  async saveToList(movie: any) {
    await this.api.post(`movies`, movie);
    this.loadMovieList();
  }
}
