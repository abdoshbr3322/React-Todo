// Import components
import TodoItem from "./TodoItem"; 
import AddTodo from './AddTodo';

// Import hooks
import { useTodos } from '../../hooks/useTodos';

// Import css
import "./Todos.scss";

export default function Todos() {
  const {todos} = useTodos();
  const message = todos ? <h1>Your todo list list is empty</h1> : null;

  return (
    <div className="todos">
      {!message}
      <ul>
        {todos.map((todoItem, index) => (
          <TodoItem
            key={index}
            item={todoItem}
            index={index}
          />
        ))}
      </ul>
      <AddTodo />
    </div>
  );
}

