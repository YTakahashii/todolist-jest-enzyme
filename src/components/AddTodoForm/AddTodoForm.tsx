import * as React from 'react';
import AddTodoFormProps from './AddTodoFromProps';
import AddTodoFormState from './AddTodoFromState';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './AddTodoFormStyle';
import classNames from 'classnames';

class AddTodoForm extends React.Component<AddTodoFormProps, AddTodoFormState> {
    constructor(props: AddTodoFormProps) {
        super(props);

        this.state = {
            input: ''
        };
    }

    public render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <form onSubmit={this.onFormSubmit}>
                    <TextField
                        id='outlined-string'
                        label='Todo'
                        value={this.state.input}
                        onChange={this.handleChange('input')}
                        className={classNames(classes.textField, classes.dense)}
                        margin='normal'
                    />
                    <Button
                        variant='contained'
                        color='primary'
                        className={classes.button}
                        type='submit'
                    >
                        Todoを追加
                    </Button>
                </form>
            </div>
        );
    }

    public handleChange = (name: keyof AddTodoFormState) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        this.setState({
            [name]: event.target.value
        } as Pick<AddTodoFormState, keyof AddTodoFormState>);
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

export default withStyles(styles)(AddTodoForm);
