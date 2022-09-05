import React from "react";
import {useState} from "react";

function TodoAdd({handleAdd}) {
  const [text, setText] = useState("");

  let handleChange = (e) => {
    setText(e.target.value);
  };

  let handleSubmit = () => {
    handleAdd(text);
  };

  return (
    <div>
      <input
        style={{
          height: "50px",
          width: "40%",
          border: "1px solid blue",
        }}
        value={text}
        onChange={handleChange}
        type="text"
        placeholder="Add Something"
      />
      <button
        style={{height: "50px", width: "8%", margin: "10px"}}
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
}

export default TodoAdd;
