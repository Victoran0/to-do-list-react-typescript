import { Todo } from './model';

interface Edit {
    id: number;
    edit: string
}

type Actions = 
{type: 'add'; payload: string}
| {type: 'remove'; payload: number}
| {type: 'done'; payload: number}
| {type: 'edit'; payload: Edit};


export const todoReducer = (state: Todo[], action: Actions) => {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                {
                    id: Date.now(), todo: action.payload, isDone: false
                }
            ];
        case 'remove':
            return state.filter((todo) => todo.id !== action.payload)
        case 'done':
            return state.map((todo) => todo.id === action.payload ? {...todo, isDone: !todo.isDone}: todo
            );
        case 'edit':
            return state.map((t) =>(t.id===action.payload.id ? {...t, todo: action.payload.edit}: t))
        default:
            return state;
    }
}