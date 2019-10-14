import { Component, OnInit, ɵConsole } from '@angular/core';
import { HttpService } from './../core/services/http.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/';

@Component({
  selector: 'app-nav-generation',
  templateUrl: './nav-generation.component.html',
  styleUrls: ['./nav-generation.component.scss']
})
export class NavGenerationComponent implements OnInit {

  public inscricao: Subscription
  public pokemonList
  public gene
  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.getGen()
  }

  getGen(gen: number = 1) {
    this.gene = gen
    this.httpService.getGeneration(gen).subscribe(dados => {
      this.getRandomPokemon(dados.pokemon_species)
    })
  }
  getRandomPokemon(array) {
    let pokemons = []
    const randomPosition = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    for (let i = 0; i < 7; i++) {
      pokemons[i] = array[randomPosition(1, array.length)];
    }

    this.pokemonList = pokemons;
  }
}
