import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesPageComponent} from './components/movies-page/movies-page.component';
import {FilmCardComponent} from './components/film-card/film-card.component';
import {FavoritControlButtonsComponent} from './components/favorit-control-buttons/favorit-control-buttons.component';
import {ReactiveFormsModule} from "@angular/forms";
import {GetFilmDataService} from "./services/get-film-data.service";
import {HttpClientModule} from "@angular/common/http";
import {FavoriteFilmsListComponent} from './components/favorite-films-list/favorite-films-list.component';
import {FilmPageComponent} from './components/film-page/film-page.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    MoviesPageComponent,
    FilmCardComponent,
    FavoritControlButtonsComponent,
    FavoriteFilmsListComponent,
    FilmPageComponent,
  ],
  exports: [
    MoviesPageComponent,
    FavoriteFilmsListComponent,
    FilmCardComponent,
    FilmPageComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [
    GetFilmDataService
  ],
})
export class MoviesModule {
}
