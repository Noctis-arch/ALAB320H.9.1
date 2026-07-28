import { useState } from "react";

function TodoItem({ todo, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.title);

  function handleSave() {
    dispatch({
      type: "EDIT_TODO",
      payload: {
        id: todo.id,
        title: editedText,
      },
    });

    setIsEditing(false);
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() =>
          dispatch({
            type: "TOGGLE_TODO",
            payload: todo.id,
          })
        }
      />

      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />

          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span className={todo.completed ? "completed" : ""}>
            {todo.title}
          </span>

          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>

          <button
            disabled={!todo.completed}
            onClick={() =>
              dispatch({
                type: "DELETE_TODO",
                payload: todo.id,
              })
            }
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default TodoItem;