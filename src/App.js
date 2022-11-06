import "./App.css"
import TodoList from "./components/todolist"

function App() {
  return (
    <div className="app-container">
      <div className="todo-container">
        <h1>Todo List</h1>
        <TodoList />
      </div>
    </div>
  )
}

export default App
