import { TodoState, todoReducer } from './todo-store';
import { IAppState } from './store';
import { CounterActions } from './counter-actions';
import { Action, combineReducers } from 'redux';

export interface IAppState {
    count?: number;
    todoStore?: TodoState;
}

const INITIAL_STATE = 0;

export function counterReducer(lastState: number = INITIAL_STATE, action: Action): number {
  switch(action.type) {
    case CounterActions.INCREMENT: return lastState + 1 ;
    case CounterActions.DECREMENT: return lastState - 1 ;
  }

  return lastState;
}

export const rootReducer = combineReducers<IAppState>({
    count: counterReducer,
    todoStore: todoReducer
});
