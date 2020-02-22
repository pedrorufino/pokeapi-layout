import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavGenerationComponent } from "./nav-generation/nav-generation.component";
import { PokemonDetailsComponent } from "./pokemon-details/pokemon-details.component";
import { NavPokemonComponent } from "./nav-pokemon/nav-pokemon.component";

@NgModule({
  declarations: [
    NavPokemonComponent,
    NavGenerationComponent,
    PokemonDetailsComponent
  ],
  imports: [CommonModule],
  exports: [
    NavGenerationComponent,
    NavPokemonComponent,
    PokemonDetailsComponent
  ]
})
export class PresentationModule {}
