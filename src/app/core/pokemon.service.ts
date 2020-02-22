import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, PokemonMedia } from 'src/app/data';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  constructor(private http: HttpClient) {
  }

  public currentPokemon = new BehaviorSubject<Pokemon>(null);
  public currentPokemonList = new BehaviorSubject<Pokemon[]>([]);

  getGeneration(generation = 1): Observable<Pokemon[]> {
    const apiUrl = `https://pokeapi.co/api/v2/generation/${generation}/`;
    return this.http.get<any>(apiUrl)
      .pipe(map(req => req.pokemon_species));
  }

  getPokemonData(pokemon): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${pokemon.url}`);
  }

  getPokemonMedia(pokemon): Observable<PokemonMedia> {
    return this.http.get<PokemonMedia>(`${pokemon.urlImg}`);
  }

  // getRandomPokemon(arr); {
  //   const pokemons = [];

  //   for (let i = 0; i < 7; i++) {
  //     pokemons[i] = arr[random(1, arr.length)];
  //   }

  //   pokemons.forEach(el => {
  //     el.urlImg = el.url.replace('-species', '');
  //   });

  //   this.pokemonList = pokemons;
  // }
}
