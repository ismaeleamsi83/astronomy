import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patent.component.html',
  styleUrl: './patent.component.scss'
})
export class PatentComponent implements OnInit, AfterViewInit {

  patents: any;
  urlPatents = "https://api.nasa.gov/techtransfer/patent/?engine&api_key=";

  showMore: boolean[]=[];

  constructor(private mainService: MainService){}

  ngOnInit():void{

    this.mainService.getPatents(this.urlPatents).
    subscribe({
      next: (data) => {
        this.patents= data.results;
        // console.log(data.results);
        // console.log(this.patents);

        this.changeParams();


        //showMore
        this.showMore = Array(this.patents.length).fill(false);

      },
      error: (errorMessage)=>{console.log('Error in getting the list of patents')},
      complete:() => console.log("Completado")
    });

    //console.log(this.patents);
    
    
  }

  changeParams(){
    
    if(this.patents != undefined){
      this.patents.forEach((element: any) => {
      
        for(let key=0; key < 14; key++){
          
          element[key] = String(element[key]).replace(/<[^>]*>/g, "");
        }
      });
    }
  }

  ngAfterViewInit():void{
    
  }


  toggleShowMore(index: number): void {
    if(this.showMore[index]){
      this.showMore[index]= false;
    }else{
      this.showMore[index] = true;
    }
  }

}


