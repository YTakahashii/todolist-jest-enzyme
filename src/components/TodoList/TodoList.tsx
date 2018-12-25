import * as React from 'react';
import TodoListProps from './TodoListProps';
import Todo from '../Todo/Todo';

const TodoList = (props: TodoListProps) => {
  const { todos } = props;

  const handleToggle = (id: number) => () => {
    props.toggleTodo(id);
  };

  const handleDelete = (id: number) => () => {
    props.deleteTodo(id);
  };

  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          handleToggle={handleToggle(todo.id)}
          handleDelete={handleDelete(todo.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
