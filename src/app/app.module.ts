import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AssignmentComponent } from './assignments/assignment/assignment.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { HomeComponent } from './home/home.component';
  // import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    AssignmentComponent,
    CoursesComponent,
    CourseComponent,
    NavbarComponent,
    AssignmentDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
