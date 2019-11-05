import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) {

  }

  getGeneration(generation) {
    let apiUrl = `https://pokeapi.co/api/v2/generation/${generation}/`
    return this.http.get<any>(apiUrl)
  }

  getPokemonData(pokemon) {
    return this.http.get<any>(`${pokemon.url}`)
  }

  getPokemonMedia(pokemon) {
    return this.http.get<any>(`${pokemon.urlImg}`)
  }
}
