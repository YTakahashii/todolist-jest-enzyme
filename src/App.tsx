import * as React from 'react';
import './App.css';
import AddTodoForm from './containers/AddTodoForm/AddTodoForm';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <AddTodoForm />
      </div>
    );
  }
}

export default App;
