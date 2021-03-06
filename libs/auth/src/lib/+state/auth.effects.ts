import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import {  map } from "rxjs/operators";

import * as fromAuth from './auth.reducer';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  loadAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadAuth),
      fetch({
        run: (action) => {
          return this.authService.login().pipe(
            map(user=>{
              
              return AuthActions.loadAuthSuccess({ auth: [] });
            })
          );
          // Your custom service 'load' logic goes here. For now just return a success action...
        },

        onError: (action, error) => {
          console.error('Error', error);
          return AuthActions.loadAuthFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
