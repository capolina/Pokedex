import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';


const routes: Routes = [
{
  path        : 'pokemon',
  component   : PokemonListComponent
},
{
  path        : 'pokemon/:id',
  component   : PokemonDetailComponent
},
{ path: '',   redirectTo: '/pokemon', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: []
})
export class PokemonRoutingModule { }
