import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Token} from '../models/token.model';
import {RefreshToken} from '../models/refresh-token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private static baseUrl = `${environment.apiDomain}/auth`;

  private token: Token = null;

  constructor(private http: HttpClient) {
    this.init();
  }

  init() {
    if (localStorage) {
      const tok = localStorage.getItem('token');
      if (tok) {
        this.token = JSON.parse(tok);
      }
    }
  }

  login(model): Observable<Token> {
    return this.http.post<Token>(`${AuthenticationService.baseUrl}/login`, model);
  }

  logout(): void {
    this.removeToken();
  }

  refreshToken(): Observable<Token> {
    if (this.isAuthenticated()) {
      const refreshToken = new RefreshToken(this.token.refresh_token);
      return this.http.post<Token>(`${AuthenticationService.baseUrl}/refresh`, refreshToken);
    }
  }

  setToken(token: Token): void {
    this.token = token;
    if (localStorage) {
      localStorage.setItem('token', JSON.stringify(token));
    }
  }

  removeToken() {
    this.token = null;
    if (localStorage) {
      localStorage.removeItem('token');
    }
  }

  getAccessToken(): string {
    return this.token.access_token;
  }

  isAuthenticated(): boolean {
    return this.token !== null;
  }
}
