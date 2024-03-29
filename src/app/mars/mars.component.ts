import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-mars',
  standalone: true,
  imports: [],
  templateUrl: './mars.component.html',
  styleUrl: './mars.component.scss'
})
export class MarsComponent implements OnInit {

  urlApi = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&api_key=";
  marsArray:any;

  constructor(private mainService: MainService){}

  ngOnInit(): void {
    this.mainService.getMars(this.urlApi).
    subscribe({
      next:(res) =>{
        this.marsArray = res.photos;
        },
      error: (error)=>{
        console.log("Error en la petición");
        console.log(error);
      }
    });
  }
}
