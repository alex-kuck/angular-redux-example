import { TodoActions } from './../todo-actions';
import { IAppState } from './../store';
import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  todoName = '';
  todoDescription = '';

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private todoActions: TodoActions
  ) { }

  ngOnInit() {
  }

  submitClicked() {
    if (this.todoName !== '') {
      this.ngRedux.dispatch(this.todoActions.create(this.todoName, this.todoDescription));
      this.todoName = '';
      this. todoDescription = '';
    }
  }

}
