import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import {DatabaseService} from 'src/app/services/database.service'

type weather = {
  location : string,
  temperature : string,
  description : string,
  icon : string
}

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent {
  filterTerm: string = "pune"
  weather : weather =  {
    location : '',
    temperature : '',
    description : '',
    icon : ''

  };
  location : string = ""
  constructor(
    private weatherService :WeatherService,
    private database : DatabaseService
  ){
  }



  search(q: any) { 
    console.log(q);
    
    this.location = q;
    this.weatherService.searchWeatherData(q).then((val :any)=>{      
      this.weather = {
        location : this.location,
        temperature : val['main']['temp'],
        description : val['weather'][0].description,
        icon : val['weather'][0].icon
      };
      this.database.setObject(this.weather);
      this.database.getObject()
      ;
    }).catch((err:any)=>{
      console.log(err);
      
    })
    // subscribe((val:any) =>{
    //   console.log(val);
    //   this.weather = val
      
    // })
}


}
