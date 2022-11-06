import { useEffect, useState } from "react"
import AddTodo from "./addtodo"
import Todo from "./todo"

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const fetchTodos = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/todos`)
    const data = await response.json()
    setTodos(data?.data)
  }
  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div className="todo-list">
      <AddTodo setTodos={setTodos} />
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.ID}>
              <Todo todo={todo} setTodos={setTodos} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList
