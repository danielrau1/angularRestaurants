import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestCardComponent } from './rest-card/rest-card.component';

import {MatCardModule} from '@angular/material/card'; // [3.2b]

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    RestCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule, // [3.2b]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
