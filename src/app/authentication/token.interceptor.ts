import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    navigation = false;

    constructor(private auth: AuthenticationService,
                private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if ( this.auth.isAuthenticated() ) {
          const token = this.auth.getAccessToken();
          request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
          });
        }
        return next.handle(request);
    }
}
