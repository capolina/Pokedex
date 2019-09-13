import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  @Input() set pokemonId(id: number) {
    this.pokemonService.getPokemon(id).subscribe(
      pokemon => this.pokemon = pokemon,
      err => console.log(err)
    );
  }

  private pokemon: any;

  constructor(private route: ActivatedRoute,
              private pokemonService: PokemonService) {
  }

  ngOnInit() {

  }

}
