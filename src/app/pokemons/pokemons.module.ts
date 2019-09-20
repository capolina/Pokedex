import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {MatListModule} from '@angular/material/list';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {RouterModule} from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule, MatSnackBarModule
} from '@angular/material';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { PokedexComponent } from './pokedex/pokedex.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokedexComponent
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
    InfiniteScrollModule,
    MatSidenavModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PokemonsModule { }
