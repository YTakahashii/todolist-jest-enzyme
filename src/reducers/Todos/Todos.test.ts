import todos from './Todos';
import * as creators from '../../actions/Todo/TodoActionCreator';
import TodoState from 'src/states/Todos/TodoState';
import Todos from 'src/states/Todos/Todos';

describe('Todos Reducer', () => {
    let initialState: Todos;

    beforeEach(() => {
        initialState = [
            {
                id: 0,
                completed: false,
                text: 'Todo0'
            }
        ];
    });

    test('正しくADD_TODOできる', () => {
        // ADD_TODO1
        const todo1: TodoState = {
            id: 0,
            completed: false,
            text: 'Todo1'
        };

        // call
        let state: Todos = [];
        state = todos(state, creators.addTodo(todo1.text));

        expect(state).toEqual([todo1]);
        expect(state.length).toBe(1);

        // ADD_TODO2
        const todo2: TodoState = {
            id: 1,
            completed: false,
            text: 'Todo2'
        };

        // call
        state = todos(state, creators.addTodo(todo2.text));

        expect(state).toEqual([todo1, todo2]);
        expect(state.length).toBe(2);
    });

    test('正しくTOGGLE_TODOできる', () => {
        // 1回目のtoggleTodoは false -> true
        let state = initialState;
        state = todos(state, creators.toggleTodo(state[0].id));
        expect(state[0].completed).toBeTruthy();

        // 2回目のtoggleTodoは false -> true
        state = todos(state, creators.toggleTodo(state[0].id));
        expect(state[0].completed).toBeFalsy();
    });

    test('正しくDELETE_TODOできる', () => {
        let state = initialState;
        state = todos(state, creators.deleteTodo(state[0].id));
        expect(state.length).toBe(0);
    });
});
