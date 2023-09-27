import { Injectable } from '@angular/core';
// import { Geolocation, GeolocationPosition } from '@capacitor/geolocation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // private loc: GeolocationPosition |any
  private WEATHER_URL: string = '';
  private FORCAST_URL : string = '';
  private APPID: string = '';
  constructor(
    private http: HttpClient,
    // private _http: Http
  ) {
    this.APPID = '2e7e1d8fabd7c153330e11d1f13782d9';
    this.WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
    this.FORCAST_URL = 'https://api.openweathermap.org/data/2.5/forecast?q='
  }

  

  searchWeatherData(cityName: string) {
    return new Promise((resolve,reject)=>{
      this.http.get(this.WEATHER_URL + cityName + '&APPID=' + this.APPID + '&units=metric').subscribe((val:any)=>{        
        resolve(val)
        reject("something is wrong")
      })
    })

  }

  forcastData(cityName: string){
    return this.http.get(this.FORCAST_URL + cityName + '&APPID=' + this.APPID + '&units=metric')

  }

  // async getCurrentPosition() {
  //   return await Geolocation.getCurrentPosition();

  // }
}
