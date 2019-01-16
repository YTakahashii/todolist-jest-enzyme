import * as React from 'react';
import * as enzyme from 'enzyme';
import TodoList from './TodoList';

import * as Adapter from 'enzyme-adapter-react-16';
import TodoListProps from './TodoListProps';
import Todo from '../Todo/Todo';

enzyme.configure({ adapter: new Adapter() });

describe('TodoList', () => {
    const props: TodoListProps = {
        todos: [],
        toggleTodo: jest.fn(),
        deleteTodo: jest.fn()
    };

    test('propsのtodosの要素数だけTodoコンポーネントが描画されること', () => {
        const wrapper = enzyme.shallow(<TodoList {...props} />);
        expect(wrapper.find(Todo).length).toBe(props.todos.length);
    });
});
