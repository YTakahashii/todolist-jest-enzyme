import TodoActionType from './TodoActionType';

export interface AddTodoAction {
    type: TodoActionType.ADD_TODO;
    id: number;
    text: string;
}

export interface ToggleTodoAction {
    type: TodoActionType.TOGGLE_TODO;
    id: number;
}

export interface DeleteTodoAction {
    type: TodoActionType.DELETE_TODO;
    id: number;
}

type TodoAction = AddTodoAction | ToggleTodoAction | DeleteTodoAction;
export default TodoAction;
