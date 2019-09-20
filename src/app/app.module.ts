import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PokemonsModule} from './pokemons/pokemons.module';
import {TokenInterceptor} from './authentication/token.interceptor';
import {AuthenticationModule} from './authentication/authentication.module';
import {TrainersModule} from './trainers/trainers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PokemonsModule,
    AuthenticationModule,
    TrainersModule
  ],
  providers: [
    {
      provide  : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi    : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
