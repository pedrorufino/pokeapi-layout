import { PokemonDetailsComponent } from './presentation/pokemon-details/pokemon-details.component';
import { NavPokemonComponent } from './presentation/nav-pokemon/nav-pokemon.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'generation-i', pathMatch: 'full' },
  {
    path: ':generation',
    component: NavPokemonComponent,
    children: [{ path: ':pokemon', component: PokemonDetailsComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
