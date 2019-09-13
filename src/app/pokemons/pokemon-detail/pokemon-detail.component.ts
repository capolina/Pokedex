import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  private id: number;
  private pokemon: any;

  constructor(private route: ActivatedRoute,
              private pokemonService: PokemonService) {
    this.id = +this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.pokemonService.getPokemon(this.id).subscribe(
      pokemon => this.pokemon = pokemon,
        err => console.log(err)
    );
  }

}
