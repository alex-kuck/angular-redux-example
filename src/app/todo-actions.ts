import { Action } from 'redux';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoActions {
    static CREATE_TODO = 'Create Todo';
    static TOGGLE_TODO = 'Toggle Todo';

    create(task: string) {
        return { type: TodoActions.CREATE_TODO, payload: task };
    }

    toggle(id: number) {
        return { type: TodoActions.TOGGLE_TODO, payload: id };
    }
}
