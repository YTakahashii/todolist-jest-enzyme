import { combineReducers } from 'redux';
import todos from './Todos/Todos';

const rootReducer = combineReducers({
  todos,
});

export default rootReducer;
