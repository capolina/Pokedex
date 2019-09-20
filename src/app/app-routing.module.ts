import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonRoutingModule} from './pokemons/pokemon-routing.module';
import {TrainerRoutingModule} from './trainers/trainer-routing.module';
import {AuthenticationRoutingModule} from './authentication/authentication-routing.module';


const routes: Routes = [ ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PokemonRoutingModule,
    TrainerRoutingModule,
    AuthenticationRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
