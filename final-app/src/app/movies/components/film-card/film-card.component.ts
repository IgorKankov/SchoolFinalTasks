import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {
  @Input() movies: any
  @Output() getMoviesIds = new EventEmitter<any>();
  favoriteMoviesIds: any;

  constructor(private router: Router) {
    this.favoriteMoviesIds = localStorage.getItem('favoriteMovies')?.split(',')
  }

  ngOnChange(val: any) {
    this.favoriteMoviesIds = val
    this.getMoviesIds.emit(this.favoriteMoviesIds)
  }

  public goToMovie(id: number) {
    this.router.navigate([`/movies/film-page/${id}`])
    window.scrollTo(0, 0)
  }

  ngOnInit(): void {
  }

}
