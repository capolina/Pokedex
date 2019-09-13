import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {MatListModule} from '@angular/material/list';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatCardModule, MatChipsModule, MatGridListModule, MatIconModule} from '@angular/material';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    InfiniteScrollModule
  ]
})
export class PokemonsModule { }
