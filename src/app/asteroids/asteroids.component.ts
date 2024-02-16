import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-asteroids',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './asteroids.component.html',
  styleUrl: './asteroids.component.scss'
})
export class AsteroidsComponent implements OnInit {

  asteroids: any;
  form!: FormGroup;
  

  asteroidsArray: any;

  //probar
  asteroidsPrueba: any =[];
  asteroidShow: any=[];


  //spinner
  isLoading = false;


  //variables para la paginacion
  limite = 5;
  desde = 0;
  paginas: any;
  paginaActiva = 1;

  constructor(
    private mainService: MainService,
    private fb: FormBuilder
    ){}

  ngOnInit(): void {
    this.form = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
    
  }

  onSubmit(){

    //spinner mostrar
    this.isLoading=true;

    this.asteroidsArray = [];
    this.asteroidsPrueba = [];
    this.asteroidShow = [];

    console.log(this.form);
    console.log(this.form.value.startDate);
    this.mainService.getAsteroids(this.form.value.startDate, this.form.value.endDate)
    .subscribe((res)=>{
      console.log(res);
      this.asteroids = res;
      console.log(this.asteroids);
      
      const fechaInicio = new Date(this.form.value.startDate); 
      const fechaFin = new Date(this.form.value.endDate);
      this.asteroidsArray = res.near_earth_objects[this.form.value.startDate];
      
      

      for (let date in res.near_earth_objects) {
        if (res.near_earth_objects.hasOwnProperty(date)) {
            console.log(`Fecha: ${date}`);
            console.log(res.near_earth_objects[date]); 
            
            this.asteroidsPrueba.push(res.near_earth_objects[date]);
          }
      }
      console.log(this.asteroidsPrueba);


      //spinner ocultar
      this.isLoading=false;
      for(const asteroid of this.asteroidsPrueba){
        for(const elem of asteroid){
          console.log(elem);
          this.asteroidShow.push(elem);
        }
      }
      console.log(this.asteroidShow);
    });
  }

  nextAsteroids(){

    if(!(this.limite >= this.asteroidShow.length)){
      this.desde += 5;
      this.limite += 5;
    }
    
  }

  previewAsteroids(){
    if(!(this.desde <= 0)){
      this.desde -= 5;
      this.limite -= 5;
    }
  }
}
