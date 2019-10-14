import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-pokemon',
  templateUrl: './nav-pokemon.component.html',
  styleUrls: ['./nav-pokemon.component.scss']
})
export class NavPokemonComponent implements OnInit {
  @Input() pokelist

  constructor() {

  }

  ngOnInit() {

  }

}
