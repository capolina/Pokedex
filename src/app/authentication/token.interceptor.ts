import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {catchError, switchMap} from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    private isRefreshing = false;

    constructor(private auth: AuthenticationService,
                private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if ( this.auth.isAuthenticated() && !this.isRefreshing ) {
          request = this.addToken(request);
        }
        return next.handle(request).pipe(
          catchError(error => {
            if (error instanceof HttpErrorResponse && error.status === 401) {
              return this.handle401Error(request, next);
            } else {
              return throwError(error);
            }
          })
        );
    }

    // Return a copy of the request with the Authorization token set
    private addToken(request: HttpRequest<any>): HttpRequest<any> {
      const token = this.auth.getAccessToken();
      return request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
      this.isRefreshing = true;
      return this.auth.refreshToken().pipe(
        switchMap(
          (token: any) => {
          this.auth.setToken(token);
          this.isRefreshing = false;
          request = this.addToken(request);
          return next.handle(request);
        })
      );
    }
}
