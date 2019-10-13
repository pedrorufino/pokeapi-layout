import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  
  constructor(private http:HttpClient) {
    
  }
  
  getGeneration(generation){

    let apiUrl:String = `http:https://pokeapi.co/api/v2/generation/${generation}/`

    return this.http.get<any[]>(`${apiUrl}`)
  }

  
}
