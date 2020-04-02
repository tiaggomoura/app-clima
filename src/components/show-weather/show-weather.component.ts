import { Component, OnInit } from '@angular/core';
import { SeachWeatherService } from '../../services/seach-weather.service'
import { WeatherDTO } from '../../dto/weatherDTO'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.css']
})
export class ShowWeatherComponent implements OnInit {

  public city: any;

  public weatherDTO: WeatherDTO;

  constructor(private weatherService: SeachWeatherService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  clearInfo() {
    this.weatherDTO = null;
  }

  messageError(msg: string) {
    this.toastr.error(msg, 'Ops !!!');
  }

  findByCity(city: any) {
    if (this.city) {
      this.weatherService.findWeatherByCity(this.city)
        .subscribe(response => {
          this.newWeatherDTO(response);
        },
          error => {
            this.messageError(error.error.message);
          });
    }
  }

  newWeatherDTO(obj: any) {
    this.weatherDTO = {
      temp: obj.main.temp,
      humidity: obj.main.humidity,
      country: obj.sys.country,
      description: obj.weather[0].description
    }
  }

}
