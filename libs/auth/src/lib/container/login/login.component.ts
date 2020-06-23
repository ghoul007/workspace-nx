import { loadAuth } from './../../+state/auth.actions';
import { AuthFacade } from './../../+state/auth.facade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-workspace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authFacade: AuthFacade) { }

  ngOnInit(): void {
    this.authFacade.dispatch(loadAuth())
  }

}
