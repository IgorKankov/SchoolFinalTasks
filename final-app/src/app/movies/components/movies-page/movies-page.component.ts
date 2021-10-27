import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {GetFilmDataService} from '../../services/get-film-data.service'
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss'],
  providers: [GetFilmDataService]
})
export class MoviesPageComponent implements OnInit {
  public search: FormControl;
  public movies: any;

  constructor(private filmDataService: GetFilmDataService) {
    this.search = new FormControl()
  }

  ngOnInit(): void {
    this.search.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(query => {
        return this.filmDataService.searchMoviesByName(query)
      })
    ).subscribe(data => {
      console.log('data', data)
      this.movies = data
    });

    // this.filmDataService.getPopularFilms().subscribe((result) => {
    //   console.log('popular films', result);
    // })
  }

}
