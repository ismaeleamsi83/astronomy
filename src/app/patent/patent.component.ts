import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-patent',
  standalone: true,
  imports: [],
  templateUrl: './patent.component.html',
  styleUrl: './patent.component.scss'
})
export class PatentComponent implements OnInit, AfterViewInit {

  patents: any;
  urlPatents = "https://api.nasa.gov/techtransfer/patent/?engine&api_key=";

  constructor(private mainService: MainService){}

  ngOnInit():void{

    this.mainService.getPatents(this.urlPatents).
    subscribe({
      next: (data) => {
        this.patents= data.results;
        console.log(data.results);
        console.log(this.patents);

        this.changeParams();
      },
      error: (errorMessage)=>{console.log('Error in getting the list of patents')},
      complete:() => console.log("Completado")
    });

    console.log(this.patents);
    
    
  }

  changeParams(){
    console.log("despues");
    if(this.patents != undefined){
      this.patents.forEach((element: any) => {
        console.log("ok");
        for(let key=0; key < 14; key++){
          console.log(key);
          console.log(element[key]);
          element[key] = String(element[key]).replace(/<[^>]*>/g, "");
        }
      });
    }
  }

  ngAfterViewInit():void{
    
  }
}


