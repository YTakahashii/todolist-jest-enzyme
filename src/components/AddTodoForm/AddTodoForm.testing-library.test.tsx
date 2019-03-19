import * as React from 'react';
import AddTodoForm from './AddTodoForm';
import { render, fireEvent, cleanup } from 'react-testing-library';
afterEach(cleanup);

describe('AddTodoForm(testing-lib)', () => {
    describe('common', () => {
        test('値を入力して「Todoを追加」ボタンを押すとaddTodoが呼び出される', () => {
            const addTodoSpy = jest.fn();
            const utils = render(<AddTodoForm addTodo={addTodoSpy} />);
            const input = utils.getByLabelText('Todo') as HTMLInputElement;
            const button = utils.getByText('Todoを追加') as HTMLButtonElement;

            // inputに'Todo'と入力をシミュレート
            fireEvent.change(input, { target: { value: 'Todo' } });
            // inputのvalueに入力した値が描画される
            expect(input.value).toEqual('Todo');
            // Todoを追加ボタンを押す
            fireEvent.submit(button);
            // addTodoが発火する
            expect(addTodoSpy).toHaveBeenCalledTimes(1); // 回数は1回
            expect(addTodoSpy).toHaveBeenCalledWith('Todo'); // 引数はTodo
        });
    });
});
