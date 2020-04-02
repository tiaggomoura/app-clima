import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config'

@Injectable({
  providedIn: 'root'
})
export class SeachWeatherService {

  url: string;

  constructor(private http: HttpClient) {

  }

  findWeatherByCity(city: any) {

    this.url =  `${API_CONFIG.baseURL}?units=metric&q=${city}&appid=${API_CONFIG.api_key}`;
    console.log(this.url);
    return this.http.get<any>(this.url);
  }


}
