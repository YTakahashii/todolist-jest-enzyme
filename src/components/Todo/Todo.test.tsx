import * as React from 'react';
import * as enzyme from 'enzyme';
import Todo from './Todo';

import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

describe('Todo text', () => {
    test('completed=trueのとき，テキストと取り消し線が描画される', () => {
        const onDummy = jest.fn();
        const todoItem = enzyme.shallow(
            <Todo
                completed={true}
                text='Todo item1'
                handleDelete={onDummy}
                handleToggle={onDummy}
            />
        );

        // テキストが描画される
        expect(todoItem.find('li > label').text()).toEqual('Todo item1');
        // 取り消し線が描画される
        const style = todoItem.find('li > label').props().style;
        if (style !== undefined) {
            expect(style.textDecoration).toEqual('line-through');
        }
    });

    test('completed=falseのとき，テキストだけが描画される', () => {
        const onDummy = jest.fn();
        const todoItem = enzyme.shallow(
            <Todo
                completed={false}
                text='Todo item1'
                handleDelete={onDummy}
                handleToggle={onDummy}
            />
        );

        // テキストが描画される
        expect(todoItem.find('li > label').text()).toEqual('Todo item1');
        // 取り消し線が描画されない
        const style = todoItem.find('li > label').props().style;
        if (style !== undefined) {
            expect(style.textDecoration).toEqual('none');
        }
    });

    test('テキストをクリックするとhandleToggleが発火する', () => {
        const handleDeleteSpy = jest.fn();
        const handleToggleSpy = jest.fn();

        const wrapper = enzyme.shallow(
            <Todo
                completed={true}
                text='Todo item1'
                handleDelete={handleDeleteSpy}
                handleToggle={handleToggleSpy}
            />
        );

        // テキストをクリック
        wrapper.find('label').simulate('click');

        // handleDeleteが発火する
        expect(handleToggleSpy).toHaveBeenCalled();
    });
});

describe('削除ボタン', () => {
    test('Todo1つにつき削除ボタンが1つ描画される', () => {
        const onDummy = jest.fn();
        const todoItem = enzyme.shallow(
            <Todo
                completed={true}
                text='Todo item1'
                handleDelete={onDummy}
                handleToggle={onDummy}
            />
        );
        // ボタンのテキストが「削除」
        expect(todoItem.find('li > button').text()).toEqual('削除');
        // ボタン自体が描画されている
        expect(todoItem.find('li > button').length).toBe(1);
    });

    test('削除ボタンをクリックするとhandleDeleteが発火する', () => {
        const handleDeleteSpy = jest.fn();
        const handleToggleSpy = jest.fn();

        const wrapper = enzyme.shallow(
            <Todo
                completed={true}
                text='Todo item1'
                handleDelete={handleDeleteSpy}
                handleToggle={handleToggleSpy}
            />
        );

        // 削除ボタンを押す
        wrapper.find('button').simulate('click');

        // handleDeleteが発火する
        expect(handleDeleteSpy).toHaveBeenCalled();
    });
});
