import { TodoActions } from './todo-actions';
import { TodoState } from './todo-store';
import { Action } from 'redux';

export interface TodoState {
    todos: Array<Todo>;
    nextId: number;
}

export class Todo {
    id: number;
    name: string;
    description: string;
    done: boolean;
}

const INITIAL_STATE: TodoState = {
    todos: [],
    nextId: 0
};

export function todoReducer(lastState: TodoState = INITIAL_STATE, action): TodoState {
    switch (action.type) {
        case TodoActions.CREATE_TODO:
            return Object.assign({}, {
                todos: [...lastState.todos, 
                { id: lastState.nextId, name: action.payload.name, description: action.payload.description, done: false }],
                nextId: lastState.nextId + 1
            });
        case TodoActions.TOGGLE_TODO:
            return {
                nextId: lastState.nextId,
                todos: lastState.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return Object.assign({}, todo, {
                            done: !todo.done
                        });
                    }
                    return todo;
                })
            };
        default:
            return lastState;
    }
};
