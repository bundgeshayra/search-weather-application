import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-forcast',
  templateUrl: './weather-forcast.component.html',
  styleUrls: ['./weather-forcast.component.scss']
})
export class WeatherForcastComponent {
  filterTerm: string = "pune"
  weatherData: any;
  forcastData: any;
  location: string = ""
  constructor(
    private weatherService: WeatherService
  ) {

  }

  search(q: any) {
    this.location = q;
    this.weatherService.forcastData(q).subscribe((val: any) => {
      this.weatherData = val;
      this.weatherData['list'].forEach((day: any) => {
        day['dt_txt'] = new Date(day['dt_txt']).toLocaleDateString();
      });
      const ids = this.weatherData['list'].map(({ dt_txt }: any) => dt_txt);
      const filtered = this.weatherData['list'].filter(({ dt_txt }: any, index: any) =>
        !ids.includes(dt_txt, index + 1));

      this.forcastData = filtered

    })

  }


}
