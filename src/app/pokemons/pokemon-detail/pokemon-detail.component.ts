import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {Pokemon} from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  @Input() set pokemonId(id: number) {
    this.pokemonService.getPokemon(id).subscribe(
      pokemon => this.pokemon = pokemon,
      err => this.handleError(err)
    );
  }

  private pokemon: Pokemon;

  constructor(private route: ActivatedRoute,
              private pokemonService: PokemonService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {

  }

  handleError(error) {
    this.snackBar.open('Error while fetching the pokemon', null, {
      duration: 2000,
    });
  }
}
