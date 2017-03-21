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
  title = 'app works!';
  @select() readonly count$: Observable<number>;
  @select(['todoStore', 'todos']) readonly todos$: Observable<Array<Todo>>;
  newTask = '';

  constructor(private ngRedux: NgRedux<IAppState>,
    private actions: CounterActions,
    private todoActions: TodoActions) { }

  increment() {
    this.ngRedux.dispatch(this.actions.increment());
  }

  decrement() {
    this.ngRedux.dispatch(this.actions.decrement());
  }

  create() {
    if (this.newTask !== '') {
      this.ngRedux.dispatch(this.todoActions.create(this.newTask));
      this.newTask = '';
    }
  }

  toggle(id: number) {
    this.ngRedux.dispatch(this.todoActions.toggle(id));
  }
}
