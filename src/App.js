import "./App.css";
import React from "react";
import TodoForm from "./components/TodoForm";
import { TodoProvider } from "./components/TodoContext";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TodoProvider>
      <div className="app">
        <h1>So that's the plan!</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
