import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from '../services/movies.service';
import { FormsModule } from '@angular/forms';
import { MoviesPage } from '../pages/movies/movies';
import { MovieDetailPage } from '../pages/movie-detail/movie-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MoviesPage,
    MovieDetailPage
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],

  entryComponents: [
    MyApp,
    HomePage,
    MoviesPage,
    MovieDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MoviesService
  ]
})
export class AppModule {}
