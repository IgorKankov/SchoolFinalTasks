import {Component, OnInit} from '@angular/core';
import {GetFilmDataService} from "../../services/get-film-data.service";

@Component({
  selector: 'app-favorite-films-list',
  templateUrl: './favorite-films-list.component.html',
  styleUrls: ['./favorite-films-list.component.scss']
})
export class FavoriteFilmsListComponent implements OnInit {
  favoriteMoviesIds: any;
  favoriteMovies: any;

  constructor(private filmDataService: GetFilmDataService) {
    this.favoriteMoviesIds = localStorage.getItem('favoriteMovies')?.split(',')
    this.favoriteMovies = []
  }

  ngOnChange(val: any) {
    if (!!val.length) this.favoriteMovies = []
    val.forEach((id: any) => {
      if (!id) return
      this.filmDataService.getMovieDetails(id).subscribe(result => {
        this.favoriteMovies.push(result)
      })
    })
  }

  ngOnInit(): void {
    this.favoriteMoviesIds.forEach((id: any) => {
      if (!id) return
      this.filmDataService.getMovieDetails(id).subscribe(result => {
        this.favoriteMovies.push(result)
      })
    })
  }
}
