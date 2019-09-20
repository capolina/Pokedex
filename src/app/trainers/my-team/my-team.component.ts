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
  private idList: number[] = [];

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
    this.idList = idList;
    const observables = idList.map(id => this.pokemonService.getPokemon(id));
    const observable = forkJoin(observables);
    observable.subscribe(pokemon => this.pokemons = pokemon);
  }

  deletePokemon(deleteId: number): void {
    const newTeam = this.idList.filter(id => id !== deleteId );
    this.trainerService.setMyTeam(newTeam).subscribe(
      () => this.loadMyTeam()
    );
  }
}
