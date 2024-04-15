import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { WeatherapiService } from '../weatherapi.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm!: FormGroup;
  showerror:boolean=false;
  weatherData!:any;
  locationsarray:any[]=["London,United Stated","California,United States","Ottawa,Canada","Delhi,India","Moscow, Russia"]
  constructor(private formBuilder: FormBuilder,private weatherapi:WeatherapiService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['select location']
    });
    this.getlocations();
  }


sendToAPIXU(formValues:any) {
console.log(formValues)
if(formValues.location=='select location'||formValues.location==''){
 this.showerror = true;
}else{
  
 this.weatherapi.getWeather(formValues.location).subscribe((data:any) => {
    console.log(data)
    //this.weatherData = data;
    let result =  data.filter(( make:any ) => {
      if(make.city == formValues.location){
        return make;
      }
    });
    console.log(result)
    this.showerror = false;
  this.weatherData = result;
  });
}
 
}

getlocations(){
  this.weatherapi.getCities().subscribe((res:any)=>{
  this.locationsarray = res;
  })
}

changefun(event:Event){
  console.log(this.weatherSearchForm.value.location)
  if(this.weatherSearchForm.value.location=='select location'||this.weatherSearchForm.value.location==''){
    this.showerror=true;
  }else{
    this.showerror = false
  }
}

}
