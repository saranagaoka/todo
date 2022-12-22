import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "./TodoContext";
import "./TodoForm.scss";

function TodoForm() {
  const [input, setInput] = useState("");
  const { setToDoItems, toDoItems } = useContext(TodoContext);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    setToDoItems((prev) => {
      return [...prev, input];
    });
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(toDoItems));
    setInput("");
  }, [toDoItems]);

  return (
    <div className="todoForm">
      <form className="todoForm__form" onSubmit={submit}>
        <input
          type="text"
          className="todoForm__input"
          placeholder="Add a todo"
          value={input}
          name="text"
          onChange={handleChange}
        />
        <button type="submit" className="todoForm__button">
          +
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
