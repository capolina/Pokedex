import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../authentication/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AuthenticationModule { }
