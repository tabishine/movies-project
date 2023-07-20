import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { MovieDetailPage } from "./movie-detail";
import { MoviesPage } from "../movies/movies";

@NgModule({
  declarations: [MovieDetailPage, MoviesPage],
  imports: [IonicPageModule.forChild(MovieDetailPage), IonicPageModule.forChild(MoviesPage)],
})
export class MovieDetailPageModule{};
