import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { EndPointServiceService } from './end-point-service.service';
import { HttperrorComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    HttperrorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule   
  ],
  providers: [
    EndPointServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
