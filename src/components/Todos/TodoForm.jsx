// Import react
import React, { useRef } from "react";

// Import hooks
import { useTodos } from "./../../hooks/useTodos";

export default function TodoForm(props) {
  const { updateTodos, add, edit } = useTodos();
  const inputTitleRef = useRef(null);
  const { item, index, action, toggleShowForm } = props;

  const addItem = (e) => {
    e.preventDefault();
    updateTodos(add, { title: inputTitleRef.current.value });
  };

  const editItem = (e) => {
    e.preventDefault();
    updateTodos(edit, { title: inputTitleRef.current.value, index });
    toggleShowForm();
  };

  return (
    <form
      className="todo-form"
      onSubmit={action === "add" ? addItem : editItem}
    >
      <label htmlFor="title" className="me-2 form-label">
        Title
      </label>
      <div className="d-flex">
        <input
          type="text"
          id="title"
          className="form-control flex-grow-0"
          ref={inputTitleRef}
          placeholder="Todo Title"
          defaultValue={action === "edit" ? item.title : null}
        />
        <button className="btn btn-primary submit-edit ms-2" data-bs-dismiss="modal">Save</button>
      </div>
    </form>
  );
}
