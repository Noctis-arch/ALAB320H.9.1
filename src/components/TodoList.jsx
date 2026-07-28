import TodoItem from "./TodoItem";

function TodoList({ todos, dispatch }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}

export default TodoList;