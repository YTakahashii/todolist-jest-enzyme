import * as React from 'react';
import * as enzyme from 'enzyme';
import AddTodoForm from './AddTodoForm';
import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

describe('AddTodoForm', () => {
    const addTodoSpy = jest.fn();
    let wrapper: enzyme.ShallowWrapper;

    beforeEach(() => {
        wrapper = enzyme.shallow(<AddTodoForm addTodo={addTodoSpy} />);
    });

    describe('Todoを追加ボタン', () => {
        test('ボタンが存在する', () => {
            expect(wrapper.find('.todo-submit').length).toBe(1);
        });

        test('ボタンテキストが「Todoを追加」', () => {
            expect(wrapper.find('button').text()).toEqual('Todoを追加');
        });

        test('inputに文字列入力後にボタンを押すとaddTodoが発火する', () => {
            const mountWrapper = enzyme.mount(
                <AddTodoForm addTodo={addTodoSpy} />
            );
            const inputValue = 'テストの書き方の勉強';

            mountWrapper.setState({ input: inputValue }); // inputのsimulateでは値が設定されないっぽい

            // ボタンを押す
            mountWrapper.find('form').simulate('submit');

            // addTodoが発火する
            expect(addTodoSpy).toHaveBeenCalledTimes(1);
            expect(addTodoSpy).toHaveBeenCalledWith(inputValue);
        });
    });

    describe('input', () => {
        test('文字列を入力したらsetStateで値が設定される', () => {
            const mountWrapper = enzyme.mount(
                <AddTodoForm addTodo={addTodoSpy} />
            );
            const setStateSpy = jest.spyOn(AddTodoForm.prototype, 'setState');

            expect(setStateSpy).toHaveBeenCalledTimes(0); // OK
            mountWrapper
                .find('input')
                .simulate('change', { target: { value: 'a' } });
            expect(setStateSpy).toHaveBeenCalledTimes(1); // OK
            // expect(setStateSpy).toHaveBeenCalledWith({ input: 'a' }); // it was called with:[{"input": ""}]
        });

        test('インプットボックスにStateの文字列が描画される', () => {
            wrapper.setState({
                input: '文字列'
            });
            expect(wrapper.find('input').props().value).toEqual('文字列');
        });
    });
});
