import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { MoviesService } from "../../services/movies.service";
import { MovieDetailPage } from "../movie-detail/movie-detail";


@Component({
  selector: "page-movies",
  templateUrl: "movies.html",
})
export class MoviesPage {
  movies: any[];

  constructor(
    public navCtrl: NavController,
    private moviesService: MoviesService,
  ) {}

  ionViewDidLoad() {
    this.moviesService.getMovies().subscribe(
      (data) => {
        this.movies = data["Search"];
      },
      (error) => {
        console.error(error);
      },
    );
  }

  openMovieDetail(imdbID: string) {
    this.navCtrl.push(MovieDetailPage, { imdbID: imdbID });
  }
}
