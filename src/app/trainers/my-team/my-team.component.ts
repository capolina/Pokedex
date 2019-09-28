import { Component, OnInit } from '@angular/core';
import {TrainerService} from '../trainer.service';
import {Pokemon} from '../../models/pokemon.model';
import {PokemonService} from '../../pokemons/pokemon.service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.scss']
})
export class MyTeamComponent implements OnInit {
  public pokemons: Pokemon[] = [];

  constructor(private trainerService: TrainerService,
              private pokemonService: PokemonService) { }

  ngOnInit() {
    this.loadMyTeam();
  }

  loadMyTeam(): void {
    this.trainerService.getMyTeam().subscribe(
    (data) => this.retrievePokemons(data)
    );
  }

  retrievePokemons(idList: number[]): void {
    const observables = idList.map(id => this.pokemonService.getPokemon(id));
    const observable = forkJoin(observables);
    observable.subscribe(pokemon => this.pokemons = pokemon);
  }

  deletePokemon(removedPokemon: Pokemon): void {
    this.pokemons = this.pokemons.filter(pokemon => pokemon !== removedPokemon );
    this.savePokemonList();
  }

  savePokemonList() {
    const newTeamIds = this.pokemons.map(pokemon => pokemon.id);
    this.trainerService.setMyTeam(newTeamIds).subscribe(
      () => this.loadMyTeam()
    );
  }
}
