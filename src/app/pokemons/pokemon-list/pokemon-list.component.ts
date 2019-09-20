import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {MatSnackBar} from '@angular/material';
import {PokedexItem} from '../../models/PokedexItem.model';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {AuthenticationService} from '../../authentication/authentication.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  @Output() changedId = new EventEmitter<number>();
  public selectedId = 1;
  public pokemons: PokedexItem[] = [];
  private offset = 0;
  private limit = 20;
  private searchInput: FormControl;

  constructor(private pokemonService: PokemonService,
              private snackBar: MatSnackBar,
              public  authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.searchInput = new FormControl('');

    this.searchInput.valueChanges
        .pipe(
          debounceTime(300),
          distinctUntilChanged())
        .subscribe( () => {
          this.offset = 0;
          this.pokemons = [];
          this.reloadList();
      });

    this.pokemonService.getPokemons().subscribe(
      pokemons => {
        this.pokemons = pokemons.data;
        this.offset = pokemons.offset;
      }
    );
  }

  changeSelected(id: number) {
    this.selectedId = id;
    this.changedId.emit(id);
  }

  onScroll(): void {
    this.reloadList();
  }

  reloadList(): void {
    this.pokemonService.getPokemons(this.offset, this.limit, this.searchInput.value).subscribe(
      pokemons => {
        this.pokemons = this.pokemons.concat(pokemons.data);
        this.offset = pokemons.offset + this.limit;
      },
      error => this.handleError(error)
    );
  }

  handleError(error) {
    this.snackBar.open('Error while fetching the list', null, {
      duration: 2000,
    });
  }
}
