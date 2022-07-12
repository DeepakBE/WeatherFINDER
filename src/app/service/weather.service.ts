import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherDatas } from '../model/weather.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: any): Observable<WeatherDatas> {
    return this.http.get<WeatherDatas>(environment.weatherApi, {
      headers: new HttpHeaders().set(environment.XRapidAPIHostName, environment.XRapidAPIHostNameValue)
        .set(environment.XRapidAPIKeyName, environment.XRapidAPIKeyNameValue),
      params: new HttpParams().set('q', cityName).set('units', 'metric').set('mode', 'json')
    })
  }
}
