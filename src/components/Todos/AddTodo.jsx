// Import components
import TodoForm from './TodoForm';

function AddTodoBtn() {
  return (
    <div
      className="tooltip-toggler position-fixed bottom-0 end-0 translate-middle"
      data-bs-toggle="tooltip"
      data-bs-title="Add a new todo item"
    >
      <button
        className="add-todo btn btn-primary btn-circle p-0"
        data-bs-toggle="modal"
        data-bs-target="#add-todo-form"
      >
        +
      </button>
    </div>
  );
}

function AddTodoForm() {
  return (
    <div id="add-todo-form" className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title">Add Todo Item</h1>
            <button className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <TodoForm action="add" />
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
