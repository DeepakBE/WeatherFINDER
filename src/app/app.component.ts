import { Component, OnInit } from '@angular/core';
import { WeatherDatas } from './model/weather.model';
import { WeatherService } from './service/weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WeatherAPI';
  temp = 16;
  public isCollapsed = true;


  cityName: string = 'chennai';
  weatherDatas?: WeatherDatas;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';

  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(this.cityName).subscribe({
      next: (response) => {
        this.weatherDatas = response;
        console.log(response)
      }
    })
  }

}
