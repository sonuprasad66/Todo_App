import React from "react";

function TodoList({title, id, status, toggleHandle, handleDelete}) {
  return (
    <div className="Container">
      <h2>{title}</h2>
      <h3>{status ? "DONE" : "NOT DONE"}</h3>
      <button className="bttn" onClick={() => toggleHandle(id, !status)}>
        Toggle
      </button>
      <button className="bttn" onClick={() => handleDelete(id)}>
        DELETE
      </button>
    </div>
  );
}

export default TodoList;
