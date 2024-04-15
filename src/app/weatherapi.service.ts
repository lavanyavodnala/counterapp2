import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {

  constructor(private http:HttpClient) { }

  locationsweatherdata:any = [{
    conditions:"Partly Cloudy",
    Farenheit:48.2,
    Celsius:9,
    location:"London,United Kingdom"

  },
  {
    conditions:" Cloudy",
    Farenheit:30,
    Celsius:5,
    location:"California,United States"

  },
  {
    conditions:"Sunny",
    Farenheit:45,
    Celsius:12,
    location:"Ottawa,Canada"

  },
  {
    conditions:"Partly Cloudy",
    Farenheit:89,
    Celsius:32,
    location:"Delhi,India"

  },
  {
    conditions:"Partly Cloudy",
    Farenheit:54,
    Celsius:12,
    location:"Moscow, Russia"

  }]

  getWeather(location:any){
    return this.http.get(`https://freetestapi.com/api/v1/weathers`);
    
   
}

getCities(){
  return this.http.get(`https://freetestapi.com/api/v1/weathers`);
}
}
