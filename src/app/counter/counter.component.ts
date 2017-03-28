import { Observable } from 'rxjs/Observable';
import { IAppState } from './../store';
import { CounterActions } from './../counter-actions';
import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @select() readonly count$: Observable<number>;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private counterActions: CounterActions
  ) { }

  ngOnInit() {
  }

  increment() {
    this.ngRedux.dispatch(this.counterActions.increment());
  }

  decrement() {
    this.ngRedux.dispatch(this.counterActions.decrement());
  }

}
