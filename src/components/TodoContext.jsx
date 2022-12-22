import { useState } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
  toDoItems: [],
  setToDoItems: () => {},
});
export const TodoProvider = ({ children }) => {
  const [toDoItems, setToDoItems] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );

  return (
    <TodoContext.Provider
      value={{
        toDoItems: toDoItems,
        setToDoItems: setToDoItems,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
