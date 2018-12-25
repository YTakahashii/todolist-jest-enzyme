import Todos from 'src/states/Todos/Todos';

export interface TodoListConnectedProps {
  todos: Todos;
}

export interface TodoListDispatchProps {
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

type TodoListProps = TodoListConnectedProps & TodoListDispatchProps;
export default TodoListProps;
