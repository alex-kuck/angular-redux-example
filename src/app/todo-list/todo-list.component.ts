import { TodoActions } from './../todo-actions';
import { Todo } from './../todo-store';
import { Observable } from 'rxjs';
import { IAppState } from './../store';
import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @select(['todoStore', 'todos']) allTodos$: Observable<Array<Todo>>;
  doneTodos$ = this.allTodos$.map(todos => todos.filter(todo => todo.done));

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private todoActions: TodoActions
  ) { }

  ngOnInit() {
  }

  toggleTodo(id: number) {
    this.ngRedux.dispatch(this.todoActions.toggle(id));
  }

}
