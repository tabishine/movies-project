import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { IonicApp, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { MoviesService } from "../services/movies.service";
import { FormsModule } from "@angular/forms";
import { MovieDetailPageModule } from "../pages/movie-detail/pages.module";

@NgModule({
  declarations: [MyApp],

  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    MovieDetailPageModule,
  ],
  bootstrap: [IonicApp],

  entryComponents: [MyApp],
  providers: [StatusBar, SplashScreen, MoviesService],
})
export class AppModule {}
