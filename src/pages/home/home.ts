import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { MoviesPage } from '../movies/movies';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  constructor(public navCtrl: NavController, private moviesService: MoviesService) {
  }

  ionViewDidLoad() {
    this.loadMovies(); 
  }

  loadMovies() {
    this.moviesService.getMovies().subscribe(
      (data) => {
        this.navCtrl.push(MoviesPage, { movies: data });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  goToMovies() {
    this.navCtrl.push(MoviesPage);
  }



}
