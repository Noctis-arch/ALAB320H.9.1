import { useReducer } from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [action.payload, ...state];

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );

    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <h1>Todo List</h1>

      <TodoForm dispatch={dispatch} />

      <TodoList
        todos={todos}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;