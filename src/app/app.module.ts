import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule
  ],

  //Dependencies and providers(singleton)
  providers: [

    CoursesService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
