import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonService } from '../../core/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.sass']
})
export class PokemonDetailsComponent implements OnInit {
  pokemon
  @Input() pokemonImg

  public subscriptions: Subscription

  constructor(private pokeService: PokemonService) {
    this.subscriptions = this.pokeService.currentPokemon.subscribe(res => this.pokemon = res)
  }

  ngOnInit() {
  }

}
