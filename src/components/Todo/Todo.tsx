import * as React from 'react';
import TodoProps from './TodoProps';

const Todo = (props: TodoProps) => {
  const { completed, text, handleToggle, handleDelete } = props;
  return (
    <li>
      <label
        onClick={handleToggle}
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
      >
        {text}
      </label>
      <button onClick={handleDelete}>削除</button>
    </li>
  );
};

export default Todo;
