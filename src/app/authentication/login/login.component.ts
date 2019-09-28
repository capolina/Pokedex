import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  get email() { return this.loginForm .get('email'); }
  get password() { return this.loginForm .get('password'); }

  constructor(private snackBar: MatSnackBar,
              private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.authenticationService.logout();

    this.loginForm = this.formBuilder.group({
      email    : ['', [ Validators.required, Validators.email ]],
      password : ['', Validators.required]
    });
  }

  login(): void {
    this.authenticationService.login(this.loginForm.value).subscribe(
      (token) => {
        this.authenticationService.setToken(token);
        this.router.navigate(['/team']);
      },
      (error) => this.handleError(error)
    );
  }

  handleError(error) {
    this.snackBar.open('Error while logging in, check username and password', null, {
      duration: 2000,
    });
  }
}
