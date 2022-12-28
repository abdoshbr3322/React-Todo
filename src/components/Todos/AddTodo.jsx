// Import react and its dependencies
import { useRef } from "react";

// Import hooks
import { useTodos } from "../../hooks/useTodos";

function AddTodoBtn() {
  return (
    <div
      className="tooltip-toggler position-fixed bottom-0 end-0 translate-middle"
      data-bs-toggle="tooltip"
      data-bs-title="Add a new todo item"
    >
      <button
        className="add-todo btn btn-primary btn-circle"
        data-bs-toggle="modal"
        data-bs-target="#add-todo-form"
      >
        +
      </button>
    </div>
  );
}

function AddTodoForm() {
  const { updateTodos, add } = useTodos();
  const inputTitleRef = useRef(null);

  return (
    <div id="add-todo-form" className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title">Add Todo Item</h1>
            <button className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateTodos(add, { title: inputTitleRef.current.value });
              }}
            >
              <label htmlFor="title" className="me-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                ref={inputTitleRef}
                placeholder="Todo Title"
              />
              <button className="submit-todo ms-2" data-bs-dismiss="modal">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AddTodo() {
  return (
    <>
      <AddTodoBtn />
      <AddTodoForm />
    </>
  );
}
