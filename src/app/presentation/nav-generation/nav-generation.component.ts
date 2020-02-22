import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../core/pokemon.service';
import { Pokemon } from 'src/app/data';

@Component({
  selector: 'app-nav-generation',
  templateUrl: './nav-generation.component.html',
  styleUrls: ['./nav-generation.component.sass']
})

export class NavGenerationComponent implements OnInit {

  ngOnInit() {
    this.pokemonService.getGeneration()
  }

  constructor(
    private route: ActivatedRoute,
    public pokemonService: PokemonService) { }

  // getGen(generationId: number = 1) {
  //   this.pokemonService.getGeneration(generationId).subscribe(res => this.pokemonList = res)
  // }
}
