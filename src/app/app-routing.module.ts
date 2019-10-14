import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { NavPokemonComponent } from './nav-pokemon/nav-pokemon.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'geracao/1', pathMatch: 'full' },
  { path: 'geracao/:id', component: NavPokemonComponent, children: [
        { path: ':name', component: PokemonDetailsComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
