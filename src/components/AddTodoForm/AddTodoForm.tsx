import * as React from 'react';
import AddTodoFormProps from './AddTodoFromProps';
import AddTodoFormState from './AddTodoFromState';

export default class AddTodoForm extends React.Component<
    AddTodoFormProps,
    AddTodoFormState
> {
    constructor(props: AddTodoFormProps) {
        super(props);

        this.state = {
            input: ''
        };
    }

    public render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input
                        type='text'
                        value={this.state.input}
                        onChange={this.onInputChange}
                        aria-label='todo-input'
                    />
                    <button type='submit' className='todo-submit'>
                        Todoを追加
                    </button>
                </form>
            </div>
        );
    }

    public onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            input: e.currentTarget.value
        });
    };

    public onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!this.state.input.trim()) {
            return;
        }

        this.props.addTodo(this.state.input);

        this.setState({
            input: ''
        });
    };
}
