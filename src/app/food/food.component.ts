import {Component, Input} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Component({
  selector:'food',
  templateUrl:'./food.component.html'
})
export class FoodComponent {
  menu:any=[
  ]
  flag=true;
  food: string = 'anh';

  constructor(private http: HttpClient) {
  }
  getMenu(){
    const url='https://foodgroup.herokuapp.com/api/menu';
    this.http.get<any>(url)
      .subscribe(data=>{
        var ls=data.data;
        this.menu=ls;
      })
  }
  on(){
    this.flag= true;
    this.getMenu();
  }off(){
    this.flag= false;
  }
}
