import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokedexComponent} from './pokedex/pokedex.component';

const routes: Routes = [
{
  path        : 'pokedex',
  component   : PokedexComponent,
},
{ path: '',   redirectTo: '/pokedex', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: []
})
export class PokemonRoutingModule { }
