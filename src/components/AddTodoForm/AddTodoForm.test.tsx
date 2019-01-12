import * as React from 'react';
import * as enzyme from 'enzyme';
import AddTodoForm from './AddTodoForm';

import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

describe('AddTodoForm', () => {
  test('Todoを追加ボタンが描画される', () => {
    const onDummy = jest.fn();
    const addTodoForm = enzyme.shallow(<AddTodoForm addTodo={onDummy} />);

    expect(addTodoForm.find('button').text()).toEqual('Todoを追加');
  });

  test('インプットに入力した文字列が描画される', () => {
    const onDummy = jest.fn();
    const addTodoForm = enzyme.shallow(<AddTodoForm addTodo={onDummy} />);

    addTodoForm.setState({
      input: '文字列'
    });

    expect(addTodoForm.find('input').props().value).toEqual('文字列');
  });
});
