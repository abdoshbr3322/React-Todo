import React from "react";

export default function TodoActions(props) {
  const {updateTodos, toggleShowForm, remove, index } = props;

  return (
    <div className="actions m-0">
      <button className="btn btn-info me-2" onClick={() => toggleShowForm()}>
        Edit
      </button>
      <button
        className="btn btn-danger"
        onClick={() => updateTodos(remove, { index })}
      >
        Delete
      </button>
    </div>
  );
}
