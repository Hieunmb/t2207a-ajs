import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ClassroomComponent} from "./classroom/classroom.component";
import {StudentComponent} from "./classroom/student.component";
import {TeacherComponent} from "./classroom/teacher.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./login/register.component";
import {RouterModule, Routes} from "@angular/router";
import {ThoiTietComponent} from "./thoitiet/thoitiet.component";
import {HttpClientModule} from "@angular/common/http";
import {FoodComponent} from "./food/food.component";

const appRoutes: Routes =[
  {path:'food',component:FoodComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'thoitiet',component:ThoiTietComponent},
];
@NgModule({
  declarations: [
    AppComponent,ClassroomComponent,StudentComponent,TeacherComponent,LoginComponent,RegisterComponent,ThoiTietComponent,FoodComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
