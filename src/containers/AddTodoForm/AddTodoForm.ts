import { Dispatch } from 'redux';
import TodoAction from '../../actions/Todo/TodoAction';
import { AddTodoFormDispatchProps } from 'src/components/AddTodoForm/AddTodoFromProps';
import { addTodo } from '../../actions/Todo/TodoActionCreator';
import { connect } from 'react-redux';
import AddTodoForm from '../../components/AddTodoForm/AddTodoForm';

const mapDispatchToProps = (
    dispatch: Dispatch<TodoAction>
): AddTodoFormDispatchProps => ({
    addTodo: (s: string) => dispatch(addTodo(s))
});

export default connect(
    null,
    mapDispatchToProps
)(AddTodoForm);
