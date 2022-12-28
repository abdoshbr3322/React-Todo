import { useRef } from "react";

export default function TodoEdit(props) {
  const inputTitleRef = useRef(null);
  const { updateTodos, edit, index, item } = props;

  return (
    <form
      className="edit-todo"
      onSubmit={(e) => {
        e.preventDefault();
        updateTodos(edit, { title: inputTitleRef.current.value, index });
      }}
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
          defaultValue={item.title}
        />
        <button className="btn btn-primary submit-edit ms-2">Save</button>
      </div>
    </form>
  );
}
