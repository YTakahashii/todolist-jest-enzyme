import { WithStyles } from '@material-ui/core/styles';
import styles from './AddTodoFormStyle';

export interface AddTodoFormDispatchProps {
    addTodo: (s: string) => void;
}

type AddTodoFormProps = AddTodoFormDispatchProps & WithStyles<typeof styles>;
export default AddTodoFormProps;
