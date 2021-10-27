import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesPageComponent} from './components/movies-page/movies-page.component'
import {FavoriteFilmsListComponent} from "./components/favorite-films-list/favorite-films-list.component";
import {FilmPageComponent} from "./components/film-page/film-page.component";

const routes: Routes = [
  {
    path: '',
    component: MoviesPageComponent,
  },
  {
    path: 'film-page/:id',
    component: FilmPageComponent
  },
  {
    path: 'favorite-films',
    component: FavoriteFilmsListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {
}
