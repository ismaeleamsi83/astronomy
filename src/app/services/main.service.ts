import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  //urlApi = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY';


  keyApi ='10Zr3JfFT2Wg4gnfR5kD8eDeY9NqaQ4FdTdz0bGe';
  keyApiDemo = 'DEMO_KEY';

  constructor(private http: HttpClient) { }


  getTodayImg(urlApi: any): Observable<any>{
    return  this.http.get<any>(urlApi+this.keyApi);
  }


  getAsteroids(startDate: string , endDate :string ) {
    //return this.http.get<any>(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=10Zr3JfFT2Wg4gnfR5kD8eDeY9NqaQ4FdTdz0bGe`);
    return this.http.get<any>(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=10Zr3JfFT2Wg4gnfR5kD8eDeY9NqaQ4FdTdz0bGe`);
  }

  getMars(urlApi: any): Observable<any>{
    return this.http.get<any>(urlApi+this.keyApi);
  }

  getPatents(urlApi: any): Observable<any>{
    return this.http.get<any>(urlApi+this.keyApi);
  }

}
