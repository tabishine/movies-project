import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MoviesService {
  private apiUrl = "http://www.omdbapi.com/?apikey=905483bc";

  constructor(private http: HttpClient) {}

  getMovies() {
    const url = `${this.apiUrl}&s=batman`;
    return this.http.get(url);
  }

  getMovieById(imdbID: string) {
    const url = `${this.apiUrl}&i=${imdbID}`;
    return this.http.get(url);
  }
}
