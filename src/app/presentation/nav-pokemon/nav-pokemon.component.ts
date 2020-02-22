import { PokemonService } from '../../core/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-pokemon',
  templateUrl: './nav-pokemon.component.html',
  styleUrls: ['./nav-pokemon.component.sass']
})

export class NavPokemonComponent {
  public pokemonList: Pokemon[]
  public subscriptions: Subscription

  // singlePokemon
  // singlePokemonImg

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pokeService: PokemonService) {
      this.subscriptions = this.pokeService.currentPokemonList.subscribe(res => this.pokemonList = res)
    }

  // pokemonDetails(pokemon) {
  //   this.pokeService.getPokemonData(pokemon).subscribe(dados => {
  //     this.singlePokemon = dados
  //   })

  //   this.pokeService.getPokemonMedia(pokemon).subscribe(dados => {
  //     this.singlePokemonImg = dados
  //   })
  // }
}
