import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ForcastService {

  constructor(private http: HttpClient) {
  }

  getWeatherInfo(lat: any, lon: any): Observable<any> {
    return this.http.get<any>(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=695f4bb1a6f8ece9dbd3f7b55049e867`)
      .pipe(
        map((data) => {
          return data.main
        }), catchError(error => throwError('Weather data not available'))
      )
  }
}
