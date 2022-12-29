// Import components
import TodoEdit from "./TodoEdit";
import TodoActions from "./TodoActions";

// Import hooks
import { useToggle } from "../../hooks/useToggle";
import { useTodos } from "../../hooks/useTodos";

export default function TodoItem(props) {
  const { item, index } = props;
  const { updateTodos, edit, remove } = useTodos();
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
        <TodoEdit
          updateTodos={updateTodos}
          edit={edit}
          index={index}
          item={item}
        />
      )}
    </li>
  );
}
