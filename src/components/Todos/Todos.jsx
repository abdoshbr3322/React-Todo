// Import components
import TodoItem from "./TodoItem"; 
import AddTodo from './AddTodo';

// Import hooks
import { useTodos } from '../../hooks/useTodos';

// Import css
import "./Todos.scss";

export default function Todos() {
  const {todos} = useTodos();

  const message = todos.length === 0 ? <h2>Your todo list list is empty</h2> : null;

  return (
    <div className="todos">
      {message}
      <ul>
        {todos.map((todoItem, index) => (
          <TodoItem
            key={index}
            index={index}
          />
        ))}
      </ul>
      <AddTodo />
    </div>
  );
}

