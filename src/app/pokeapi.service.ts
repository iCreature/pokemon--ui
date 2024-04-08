import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  readonly APIURL = "https://r835g59akl.execute-api.eu-west-1.amazonaws.com/deploy/pokemon/";
  readonly ImageURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  constructor(private http: HttpClient) { }

  getPokemoneList() : Observable<any[]> {
    return this.http.get<any[]>(this.APIURL + 'summary');
  }
 
  getDetailed(id:any) : Observable<any[]> {
    return this.http.get<any[]>(this.APIURL + 'details/' + id);
  }

  getImage(imageId: any) : Observable<any[]> {
    return this.http.get<any[]>(this.ImageURL+imageId+'.png');
  }

}
