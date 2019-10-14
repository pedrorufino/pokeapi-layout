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


  constructor(private router: Router, private route: ActivatedRoute) {

  }

  // criar rota relativa a atual
  // exportar para o componente details
  pokemonDetails(pokemon) {

    this.router.navigate([`geracao/${this.gen}/`, pokemon.name], { relativeTo: this.route })
  }

  ngOnInit() {
  }

}
