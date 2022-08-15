import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./styles.scss";

type TodoInterface = {
  id: Number;
  text: string;
  done: boolean;
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoInterface>>([
    { id: 1, text: "Buy milk", done: true },
    { id: 2, text: "Buy bread", done: false }
  ]);

  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
