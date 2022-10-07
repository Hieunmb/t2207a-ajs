import {Component, Input} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Component({
  selector:'food',
  templateUrl:'./food.component.html'
})
export class FoodComponent {
  food: string = 'anh';

  constructor(private http: HttpClient) {
  }

  burger() {
    const url = 'https://foodgroup.herokuapp.com/api/menu'
    this.http.get<any>(url)
      .subscribe(data => {
        this.food = data.data[0].icon;
      })
  }chicken() {
    const url = 'https://foodgroup.herokuapp.com/api/menu'
    this.http.get<any>(url)
      .subscribe(data => {
        this.food = data.data[1].icon;
      })
  }rice() {
    const url = 'https://foodgroup.herokuapp.com/api/menu'
    this.http.get<any>(url)
      .subscribe(data => {
        this.food = data.data[2].icon;
      })
  }drinks() {
    const url = 'https://foodgroup.herokuapp.com/api/menu'
    this.http.get<any>(url)
      .subscribe(data => {
        this.food = data.data[3].icon;
      })
  }dessert() {
    const url = 'https://foodgroup.herokuapp.com/api/menu'
    this.http.get<any>(url)
      .subscribe(data => {
        this.food = data.data[4].icon;
      })
  }
}
