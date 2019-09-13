import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  @Output() changedId = new EventEmitter<number>();
  public selectedId = 1;
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

  changeSelected(id: number) {
    this.selectedId = id;
    this.changedId.emit(id);
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
