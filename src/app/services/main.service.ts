import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  //urlApi = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY';


  keyApi ='10Zr3JfFT2Wg4gnfR5kD8eDeY9NqaQ4FdTdz0bGe';

  constructor(private http: HttpClient) { }



  getMars(urlApi: any){
    return  this.http.get<any>(urlApi+this.keyApi);
  }

  getTodayImg(urlApi: any){
    return  this.http.get<any>(urlApi+this.keyApi);
  }

}
