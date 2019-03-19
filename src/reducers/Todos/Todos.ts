import Todos from 'src/states/Todos/Todos';
import TodoAction from 'src/actions/Todo/TodoAction';
import TodoActionType from '../../actions/Todo/TodoActionType';

export const initialState: Todos = [];

const todos = (state: Todos = initialState, action: TodoAction): Todos => {
    switch (action.type) {
        case TodoActionType.ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case TodoActionType.TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.id
                    ? {
                          ...todo,
                          completed: !todo.completed
                      }
                    : todo
            );
        case TodoActionType.DELETE_TODO:
            const deleteIndex = state.findIndex(todo => todo.id === action.id);
            return [
                ...state.slice(0, deleteIndex),
                ...state.slice(deleteIndex + 1)
            ];
        default:
            return state;
    }
};

export default todos;
