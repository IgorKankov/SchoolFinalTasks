import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8');

@Injectable({
  providedIn: 'root'
})
export class GetFilmDataService {

  constructor(private http: HttpClient) {
  }

  searchMoviesByName(query: string): Observable<any> {
    return this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=3cbdb8c9b35bcd6430e00f107a5549f6&query=${query}`)
      .pipe(
        map((data) => {
          return data.results
        }), catchError(error => throwError('Movie not found.'))
      )
  }

  // getPopularFilms() {
  //   return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=3cbdb8c9b35bcd6430e00f107a5549f6')
  // }

  getMovieDetails(id: any){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3cbdb8c9b35bcd6430e00f107a5549f6`)
  }

  getRecommendation(id: any): Observable<any>{
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=3cbdb8c9b35bcd6430e00f107a5549f6`)
      .pipe(
        map((data) => {
          return data.results
        }), catchError(error => throwError('Movie not found.'))
      )
  }
}
