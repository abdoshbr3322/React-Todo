// Import components
import TodoForm from './TodoForm';
import TodoActions from "./TodoActions";

// Import hooks
import { useToggle } from "../../hooks/useToggle";
import { useTodos } from "../../hooks/useTodos";

export default function TodoItem(props) {
  const { updateTodos, remove, todos } = useTodos();
  const { index } = props;
  const item = todos[index];
  const [showForm, toggleShowForm] = useToggle();

  return (
    <li className="todo-item w-100 mb-4 border px-2 py-3 rounded bg-light">
      <div className="d-flex justify-content-between">
        <h3 className="title .w-75">{item.title}</h3>
        <TodoActions
          updateTodos={updateTodos}
          remove={remove}
          toggleShowForm={toggleShowForm}
          index={index}
          item={item}
        />
      </div>
      {showForm && (
        <TodoForm
          action="edit"
          toggleShowForm={toggleShowForm}
          item={item}
          index={index}
        />
      )}
    </li>
  );
}
