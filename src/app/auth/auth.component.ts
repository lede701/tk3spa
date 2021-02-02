import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { AuthService, AuthResponseData } from '../shared/auth.service';
import { User } from "../shared/user";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  private routeParamsSubscriber: Subscription;

  isLogin: boolean = true;
  isLoading: boolean = false;
  message: string = null;

  authForm: FormGroup;
  type: string;

  constructor(private actRoute: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.routeParamsSubscriber = this.actRoute.firstChild.params
      .subscribe((params: Params) => {
        this.type = params['type'];
        if (this.type == 'logout') {
          this.authService.Logout();
        }
      });

    this.authForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'confirm': new FormControl(null),
      'rememberMe': new FormControl(null)
    });
  }

  ngOnDestroy() {
    this.routeParamsSubscriber.unsubscribe();
  }

  getIsLoggedIn(): boolean {
    return this.authService.getIsAuthenticated();
  }

  onSubmit(): boolean {
    let bRetVal: boolean = false;
    if (this.authForm.status === 'VALID') {
      this.isLoading = true;
      const username = this.authForm.value.username;
      const password = this.authForm.value.password;
      let authObs: Observable<AuthResponseData>;
      // Check if we are in create or login mode
      if (this.isLogin) {
        // Try logging user into the system
        authObs = this.authService.Login(username, password);
      } else {
        // Try creating a new user
        authObs = this.authService.Create(username, password)
      }
      authObs.subscribe(authData => {
        //this.router.navigate(['/']);

        let newUser = new User(authData.localId, authData.email, authData.idToken);
        newUser.isAuthenticated = true;
        this.authService.setUser(newUser);
        this.isLoading = false;
        console.log(newUser);
      }, error => {
        this.message = error;
        console.log(error);
        this.isLoading = false;
      });
  } else {
      console.error("Invalid login information");
    }

     return bRetVal;
  }

  toggleCreate() {
    this.isLogin = !this.isLogin;
  }
}
