import {Component, Input} from "@angular/core";
@Component({
  selector:'classroom',
  templateUrl:'./classroom.component.html'
})
export class ClassroomComponent{
className='T2207A-SEM1';
schoolName='FPT Academy International';
siso=27;
themSinhVien(){
  this.siso++;
}giamSinhVien(){
  this.siso--;
}
}
