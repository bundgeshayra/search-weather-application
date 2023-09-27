import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-application';
  public segment: string = "current-weather";
  public arr = new Array(25);
  constructor(
  ){

  }

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }
}
