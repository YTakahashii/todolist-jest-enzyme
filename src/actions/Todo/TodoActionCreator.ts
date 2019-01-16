import * as TodoActions from './TodoAction';
import TodoActionType from './TodoActionType';

let nextTodoId = 0;

export const addTodo = (text: string): TodoActions.AddTodoAction => ({
    type: TodoActionType.ADD_TODO,
    id: nextTodoId++,
    text
});

export const toggleTodo = (id: number): TodoActions.ToggleTodoAction => ({
    type: TodoActionType.TOGGLE_TODO,
    id
});

export const deleteTodo = (id: number): TodoActions.DeleteTodoAction => ({
    type: TodoActionType.DELETE_TODO,
    id
});
