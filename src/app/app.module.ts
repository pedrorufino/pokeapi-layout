import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavGenerationComponent } from './nav-generation/nav-generation.component';
import { NavPokemonComponent } from './nav-pokemon/nav-pokemon.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    NavGenerationComponent,
    NavPokemonComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
