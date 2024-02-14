import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  //url 
  //urlApi = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=';

  //principal foto del dia y descripcion
  urlToday = 'https://api.nasa.gov/planetary/apod?api_key=';
  photoToday: any;


  constructor(private  mainService : MainService) {}

  ngOnInit(){
    this.mainService.getTodayImg(this.urlToday).subscribe((data)=>{
      this.photoToday = data;
    });
  }

}
