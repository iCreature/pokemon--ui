import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  readonly APIURL = "https://pokeapi.co/api/v2";

  constructor(private http: HttpClient) { }

  getPokemoneList():Observable<any[]>{
    return this.http.get<any[]>(this.APIURL+'/departments/');
  }
  
}
