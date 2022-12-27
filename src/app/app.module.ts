import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesListComponent } from './components/classes-list/classes-list.component';
import {HttpClientModule} from '@angular/common/http';
import { PresentationPageComponent } from './components/presentation-page/presentation-page.component';

import {NgImageSliderModule} from 'ng-image-slider';
import { Carousel1Component } from './components/carousel1/carousel1.component';
import { Carousel2Component } from './components/carousel2/carousel2.component';
import { ClassDetailsComponent } from './components/class-details/class-details.component'


@NgModule({
  declarations: [
    AppComponent,
    ClassesListComponent,
    PresentationPageComponent,
    Carousel1Component,
    Carousel2Component,
    ClassDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
