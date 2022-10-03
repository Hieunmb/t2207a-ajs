import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ClassroomComponent} from "./classroom/classroom.component";
import {StudentComponent} from "./classroom/student.component";
import {TeacherComponent} from "./classroom/teacher.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./login/register.component";
@NgModule({
  declarations: [
    AppComponent,ClassroomComponent,StudentComponent,TeacherComponent,LoginComponent,RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
