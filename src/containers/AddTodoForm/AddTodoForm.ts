import { Dispatch } from 'redux';
import TodoAction from 'src/actions/Todo/TodoAction';
import { AddTodoFormDispatchProps } from 'src/components/AddTodoForm/AddTodoFromProps';
import { addTodo } from 'src/actions/Todo/TodoActionCreator';
import { connect } from 'react-redux';
import AddTodoForm from 'src/components/AddTodoForm/AddTodoForm';

const mapDispatchToProps = (
  dispatch: Dispatch<TodoAction>
): AddTodoFormDispatchProps => ({
  addTodo: (s: string) => dispatch(addTodo(s))
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodoForm);
