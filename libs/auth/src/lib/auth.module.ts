import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';
import { AuthFacade } from './+state/auth.facade';
import { LoginComponent } from './container/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
       {path: '', pathMatch: 'full', component: LoginComponent}  
    ]),

    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.reducer),

    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [AuthFacade],
  declarations: [LoginComponent, LoginFormComponent],
})
export class AuthModule {}
