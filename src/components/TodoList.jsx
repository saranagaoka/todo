import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import "./TodoList.scss";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoList() {
  const { toDoItems, setToDoItems } = useContext(TodoContext);
  const deleteItem = (item) => {
    setToDoItems((prev) => {
      return prev.filter((el) => {
        return el != item;
      });
    });
  };

  return (
    <div className="todoList">
      {toDoItems?.map((item) => {
        return (
          <div className="todo__item">
            {item}
            <div className="todo__buttons">
              <button
                className="todo__deleteButton"
                onClick={() => {
                  deleteItem(item);
                }}
              >
                <DeleteIcon />
              </button>
              <input type="checkbox"></input>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
