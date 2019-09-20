import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PokemonList} from '../models/pokemon-list.model';
import {Pokemon} from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  private static baseUrl = `${environment.apiDomain}/trainers`;

  constructor(private http: HttpClient) { }

  getMyTeam(): Observable<number[]> {
    return this.http.get<number[]>( `${TrainerService.baseUrl}/me/team`);
  }

  setMyTeam(idList: number[]): Observable<PokemonList> {
    return this.http.put<PokemonList>( `${TrainerService.baseUrl}/me/team`, idList);
  }
}
