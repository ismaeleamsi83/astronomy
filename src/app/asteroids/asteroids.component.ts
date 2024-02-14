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

  

  constructor(
    private mainService: MainService,
    private fb: FormBuilder
    ){}

  ngOnInit(): void {
    this.form = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
    
    this.mainService.getAsteroids("2015-09-07","2015-09-08").subscribe((data) =>{
      const fechaInicio = "2015-09-07";
      const fechaFinal = "2015-09-08";
      console.log('Data received');
      console.log(data);
      console.log(data.near_earth_objects);
      console.log(data.near_earth_objects[fechaInicio]);
      console.log(data.near_earth_objects[fechaFinal]);
    });

  }

  onSubmit(){
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
      //this.asteroidsArray = res.near_earth_objects[fechaInicio.getFullYear() + '-' + (fechaInicio.getMonth() + 1) + '-' + fechaInicio.getDate()];
      //console.log(this.asteroidsArray);
      
      
      
      // console.log(todos);
      while(fechaFin.getTime() >= fechaInicio.getTime()){
        //console.log(res.near_earth_objects[]);
        let fecha = fechaInicio.getFullYear() + '-' + (fechaInicio.getMonth() + 1) + '-' + fechaInicio.getDate();
        console.log(fecha);
        //this.asteroidsArray = res.near_earth_objects['"'+fecha+'"'];
        console.log(fechaInicio.getFullYear() + '-' + (fechaInicio.getMonth() + 1) + '-' + fechaInicio.getDate());
        fechaInicio.setDate(fechaInicio.getDate() + 1);
  
      }
      console.log(this.asteroidsArray);
    });
  }
}
