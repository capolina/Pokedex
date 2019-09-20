import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Pokemon} from '../models/pokemon.model';
import {PokemonList} from '../models/pokemon-list.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private static pokedexApiUrl = `${environment.apiDomain}/pokemons`;

  constructor(private http: HttpClient) { }

  getPokemons(offset: number = 0, limit: number = 20, query: string = null): Observable<PokemonList> {
    let params: HttpParams = new HttpParams().set('offset', '' + offset)
                                               .set('limit', '' + limit);
    if (query) {
      params = params.set('search', query);
    }
    return this.http.get<PokemonList>( PokemonService.pokedexApiUrl, {params});
  }

  getPokemon(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>( `${PokemonService.pokedexApiUrl}/${id}`);
  }
}
