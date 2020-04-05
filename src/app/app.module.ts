import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { MaterialModule } from '../app/material/material.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeachWeatherService } from '../services/seach-weather.service'
import { ShowWeatherComponent } from '../components/show-weather/show-weather.component';
import { FormsModule }   from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    ShowWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-center',
      preventDuplicates: false,
    }),

    HttpClientModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [SeachWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
