import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-favorit-control-buttons',
  templateUrl: './favorit-control-buttons.component.html',
  styleUrls: ['./favorit-control-buttons.component.scss']
})
export class FavoritControlButtonsComponent implements OnInit {
  @Input() movieId: any
  @Output() getMoviesIds = new EventEmitter<any>();
  favoriteMovies: any


  constructor() {
    this.favoriteMovies = localStorage.getItem('favoriteMovies')?.split(',')
  }

  saveToFavorite(movie: any) {
    this.favoriteMovies = localStorage.getItem('favoriteMovies')?.split(',')
    this.favoriteMovies = this.favoriteMovies ? this.favoriteMovies : [];
    if (this.favoriteMovies.includes(movie.toString())) return
    this.favoriteMovies.push(movie.toString())
    localStorage.setItem('favoriteMovies', this.favoriteMovies)
    this.getMoviesIds.emit(this.favoriteMovies)
  }

  deleteFromFavorite(movie: any) {
    this.favoriteMovies = localStorage.getItem('favoriteMovies')?.split(',')
    this.favoriteMovies = this.favoriteMovies ? this.favoriteMovies : [];
    const index = this.favoriteMovies.indexOf(movie.toString(), 0)
    if (index > -1) {
      this.favoriteMovies.splice(index, 1);
      localStorage.setItem('favoriteMovies', this.favoriteMovies)
    }
    this.getMoviesIds.emit(this.favoriteMovies)
  }

  ngOnInit(): void {
  }

}
