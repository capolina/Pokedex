import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private static pokedexApiUrl = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io';

  constructor(private http: HttpClient) { }

  getPokemons(offset: number = 0, limit: number = 20, query: string = null): Observable<any> {
    let params: HttpParams = new HttpParams().set('offset', '' + offset)
                                               .set('limit', '' + limit);
    if (query){
      params = params.set('search', query);
    }
    return this.http.get<any>( PokemonService.pokedexApiUrl + '/pokemons', {params});
  }

  getPokemon(id: number): Observable<any> {
    return this.http.get<any>( PokemonService.pokedexApiUrl + '/pokemons/' + id);
  }
}
