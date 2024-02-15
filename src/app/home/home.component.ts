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

  showError: boolean = false;


  constructor(private  mainService : MainService) {}

  ngOnInit(){
    this.mainService.getTodayImg(this.urlToday).subscribe({
      next:  (data) => {
        console.log('Data recibida');
        this.photoToday = data;
      },
      error: (error) => {
        if(error.status == 504){
          console.log("Todavia no han actualizado la foto de hoy");
          this.showError = true;
        }else{
          console.log('Error en la peticion');
        }
        
      },
      complete: ()=>console.log('Peticion completa')
    });
  }

  hiddenError(){
    this.showError = false;
  }

}
