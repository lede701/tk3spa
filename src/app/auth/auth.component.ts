import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  private routeParamsSubscriber: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    this.routeParamsSubscriber = this.route.params
      .subscribe((params: Params) => {
        console.log(params['type']);
      });
  }

  ngOnDestroy() {
    this.routeParamsSubscriber.unsubscribe();
  }
}
