import { useState } from "react"

async function create(name, setTodos) {
  if (name) {
    await fetch(`${process.env.REACT_APP_API_URL}/todos`, {
      method: "POST",
      body: JSON.stringify({ name }),
    })

    // refetch todos list and set todos state
    const response = await fetch(`${process.env.REACT_APP_API_URL}/todos`)
    const data = await response.json()
    setTodos(data?.data)
  } else {
    alert("Please enter something!")
  }
}

export default function AddTodo({ setTodos }) {
  let [name, setName] = useState("")

  return (
    <div className="addtodo">
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name || ""}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            create(name, setTodos)
            setName("")
          }
        }}
      />
      <button
        onClick={async () => {
          await create(name, setTodos)
          setName("")
        }}
      >
        Add
      </button>
    </div>
  )
}
