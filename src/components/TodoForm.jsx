import { useState } from "react";

function TodoForm({ dispatch }) {
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!newTodo.trim()) return;

    dispatch({
      type: "ADD_TODO",
      payload: {
        id: Date.now(),
        title: newTodo,
        completed: false,
      },
    });

    setNewTodo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;