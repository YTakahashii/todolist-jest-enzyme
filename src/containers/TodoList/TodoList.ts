import RootState from 'src/states';
import {
  TodoListConnectedProps,
  TodoListDispatchProps
} from 'src/components/TodoList/TodoListProps';
import { Dispatch } from 'redux';
import TodoAction from 'src/actions/Todo/TodoAction';
import { toggleTodo, deleteTodo } from 'src/actions/Todo/TodoActionCreator';
import { connect } from 'react-redux';
import TodoList from 'src/components/TodoList/TodoList';

const mapStateToProps = (state: RootState): TodoListConnectedProps => ({
  todos: state.todos
});

const mapDispatchToProps = (
  dispatch: Dispatch<TodoAction>
): TodoListDispatchProps => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id)),
  deleteTodo: (id: number) => dispatch(deleteTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
