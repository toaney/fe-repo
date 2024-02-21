type AddItem = (newTodo: string) => void;
type DeleteItem = (id: string) => void;
type ToggleItem = (id: string) => void;

type TodoItemInterface = {
  id: string;
  value: string;
  completed: boolean;
}
