import { HttpService } from './../core/services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-pokemon',
  templateUrl: './nav-pokemon.component.html',
  styleUrls: ['./nav-pokemon.component.scss']
})
export class NavPokemonComponent implements OnInit {
  @Input() pokelist
  @Input() gen

  public singlePokemon
  public singlePokemonImg 
  public isActive: boolean = false

  constructor(private router: Router, private route: ActivatedRoute, private service: HttpService) {

  }

  pokemonDetails(pokemon) {
    this.isActive = !this.isActive;

    this.service.getPokemonData(pokemon).subscribe(dados => {
      this.singlePokemon = dados
    })

    this.service.getPokemonMedia(pokemon).subscribe(dados => {
      this.singlePokemonImg = dados
    })

    this.router.navigate([`geracao/${this.gen}/`, pokemon.name], { relativeTo: this.route })
  }

  ngOnInit() {
  }


}
