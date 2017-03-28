import { TodoActions } from './todo-actions';
import { Todo } from './todo-store';
import { IAppState } from './store';
import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { select, NgRedux } from '@angular-redux/store';

import { CounterActions } from './counter-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Redux-Example';

  constructor() { }
}
