import * as React from 'react';
import AddTodoForm from './containers/AddTodoForm/AddTodoForm';
import TodoList from './containers/TodoList/TodoList';

class App extends React.Component {
  public render() {
    return (
      <div>
        <AddTodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
