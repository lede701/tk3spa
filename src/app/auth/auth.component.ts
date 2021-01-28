import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  private routeParamsSubscriber: Subscription;

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
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required]),
      'rememberMe': new FormControl(null)
    });
  }

  ngOnDestroy() {
    this.routeParamsSubscriber.unsubscribe();
  }

  getIsLoggedIn(): boolean {
    return this.authService.getIsAuthenticated();
  }

  onLoginClicked() {
    
  }

  onSubmit(): boolean {
    let bRetVal: boolean = false;
    if (this.authForm.status === 'VALID') {
      bRetVal = this.authService.Login(this.authForm.value['username'], this.authForm.value['password']);
    } else {
      console.error("Invalid login information");
    }

    this.router.navigate(['/']);

    return bRetVal;
  }
}
