import {Component, Input} from "@angular/core";
@Component({
  selector:'student',
  templateUrl:'./student.component.html'
})
export class StudentComponent{
 @Input()
  classN?:string;
  banGai=0;
  themBanGai(){
    this.banGai++;
  }giamBanGai(){
    if (this.banGai > 0) {
      this.banGai--;
    }
  }
}
