import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  public pokemons: any = [];
  private offset = 0;
  private limit = 10;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe(
      pokemons => {
        this.pokemons = pokemons.data;
        this.offset = pokemons.offset;
        this.limit = pokemons.limit;
      }
    );
  }

  onScroll(): void {
    this.pokemonService.getPokemons(this.offset + this.limit).subscribe(
      pokemons => {
        this.pokemons = this.pokemons.concat(pokemons.data);
        this.offset = pokemons.offset;
      }
    );
  }
}
