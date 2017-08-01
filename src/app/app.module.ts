import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import {WelcomePage} from '../pages/welcome/welcome';
import {MovieListPage} from '../pages/movie-list/movie-list';
import {MovieDetailPage} from '../pages/movie-detail/movie-detail';
import {ActorListPage} from '../pages/actor-list/actor-list';
import {ActorDetailPage} from '../pages/actor-detail/actor-detail';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {AboutPage} from '../pages/about/about';

import {MovieService} from "../providers/movie-service-mock";
import {ActorService} from "../providers/actor-service-mock";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Importing the AF2 Module to use Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Firebase configuration
export const firebaseConfig = {
    apiKey: "myApiKey",
    authDomain: "myAuthDomain",
    databaseURL: "myDatabaseURL",
    projectId: "myProjectId",
    storageBucket: "myStorageBucket",
    messagingSenderId: "myMessagingSenderId"
};

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    AboutPage,
    MovieListPage,
    MovieDetailPage,
    FavoriteListPage,
    ActorListPage,
    ActorDetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig), AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    AboutPage,
    MovieListPage,
    MovieDetailPage,
    FavoriteListPage,
    ActorListPage,
    ActorDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MovieService,
    ActorService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
