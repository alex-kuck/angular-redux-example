import { Action } from 'redux';
import { Injectable } from '@angular/core';

@Injectable()
export class CounterActions {
    static INCREMENT = 'Increment';
    static DECREMENT = 'Decrement';

    increment(): Action {
        return { type: CounterActions.INCREMENT };
    }

    decrement(): Action {
        return { type: CounterActions.DECREMENT };
    }
}
