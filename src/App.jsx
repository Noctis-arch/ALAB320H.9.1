import { useReducer } from "react";
import "./App.css";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <h1>Todo List</h1>
    </div>
  );
}

export default App;