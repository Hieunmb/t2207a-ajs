import{Component,Input} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Component({
  selector:'weather',
  templateUrl:'weather.component.html'
})
export class WeatherComponent {
  ls: any = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.weather();
  }

  weather() {
    const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric';
    this.http.get<any>(url)
      .subscribe(data => {
        var menu = data.list;
        this.ls = menu;
      })
  }
}
