import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-patent',
  standalone: true,
  imports: [],
  templateUrl: './patent.component.html',
  styleUrl: './patent.component.scss'
})
export class PatentComponent implements OnInit {

  patents: any;
  urlPatents = "https://api.nasa.gov/techtransfer/patent/?engine&api_key=DEMO_KEY";

  constructor(private mainService: MainService){}

  ngOnInit():void{

    this.mainService.getPatents(this.urlPatents).
    subscribe({
      next: (data) => {
        this.patents= data.results;
        console.log(data.results);
        console.log(this.patents);
      },
      error: (errorMessage)=>{console.log('Error in getting the list of patents')},
      complete:() => console.log("Completado")
    });

    console.log(this.patents);
  }
}
