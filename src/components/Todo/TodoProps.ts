export interface TodoOwnProps {
  completed: boolean;
  text: string;
  handleToggle: () => void;
  handleDelete: () => void;
}

type TodoProps = TodoOwnProps;
export default TodoProps;
