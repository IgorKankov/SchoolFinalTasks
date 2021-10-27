import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GetFilmDataService} from "../../services/get-film-data.service";
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.scss']
})
export class FilmPageComponent implements OnInit {
  public movieData: any;
  public recommendations: any;
  public favoriteMoviesIds: any

  constructor(private activatedRoute: ActivatedRoute, private filmDataService: GetFilmDataService) {
    this.favoriteMoviesIds = localStorage.getItem('favoriteMovies')?.split(',')
  }

  ngOnChange(val: any) {
    this.favoriteMoviesIds = val
  }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.paramMap.get('id')

    this.activatedRoute.params.pipe(
      map(params => params.id),
      switchMap(id => this.filmDataService.getMovieDetails(id))
    ).subscribe(resp => this.movieData = resp);
    this.filmDataService.getRecommendation(id).subscribe(resp => this.recommendations = resp)
  }
}
