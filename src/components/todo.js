async function update(id, completed) {
  await fetch(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ id, completed }),
  })
}

async function remove(id) {
  await fetch(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
    method: "DELETE",
  })
}

export default function Todo({ todo, setTodos }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        onChange={(e) => {
          update(todo.ID, e.target.checked)
          setTodos((todos) => {
            return todos.map((t) => {
              if (t.ID === todo.ID) {
                return { ...t, completed: e.target.checked }
              }
              return t
            })
          })
        }}
        checked={todo.completed || false}
      />
      {todo.name}
      <button
        onClick={() => {
          remove(todo.ID)
          setTodos((todos) => {
            return todos.filter((t) => t.ID !== todo.ID)
          })
        }}
      >
        Delete
      </button>
    </div>
  )
}
