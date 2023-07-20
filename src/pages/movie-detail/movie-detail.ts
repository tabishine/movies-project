import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: "page-movie-detail",
  templateUrl: "movie-detail.html",
})
export class MovieDetailPage implements OnInit {
  movieId: string;
  movie: any;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private moviesService: MoviesService,
  ) {}

  ngOnInit() {
    this.movieId = this.navParams.get("imdbID");
    this.getMovieInfo();
  }

  getMovieInfo() {
    this.moviesService.getMovieById(this.movieId).subscribe(
      (data: Object) => (this.movie = data),
      (error) => {
        console.error(error);
      },
    );
  }
}
