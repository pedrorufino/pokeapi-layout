import { NavPokemonComponent } from './nav-pokemon/nav-pokemon.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'geracao/1', pathMatch: 'full' },
  { path: 'geracao/:id', component: NavPokemonComponent },  
  { path: 'geracao/:id', component: NavPokemonComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
