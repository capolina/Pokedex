import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonRoutingModule} from './pokemons/pokemon-routing.module';


const routes: Routes = [ ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PokemonRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
