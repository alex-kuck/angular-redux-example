import { TodoActions } from './todo-actions';
import { TodoState } from './todo-store';
import { Action } from 'redux';

export interface TodoState {
    todos: Array<Todo>;
    nextId: number;
}

export class Todo {
    id: number;
    task: string;
    done: boolean;
}

const INITIAL_STATE: TodoState = {
    todos: [],
    nextId: 0
};

export function todoReducer(lastState: TodoState = INITIAL_STATE, action): TodoState {
    switch (action.type) {
        case TodoActions.CREATE_TODO:
            return {
                todos: [...lastState.todos, { id: lastState.nextId, task: action.payload, done: false }],
                nextId: lastState.nextId + 1
            };
        case TodoActions.TOGGLE_TODO:
            return {
                nextId: lastState.nextId,
                todos: lastState.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            id: todo.id,
                            task: todo.task,
                            done: !todo.done
                        };
                    }
                    return todo;
                })
            };
        default:
            return lastState;
    }
};