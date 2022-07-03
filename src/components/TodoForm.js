import { useState } from "react";

function TodoForm({ addTodo }) {
  const [todos, setTodos] = useState({
    id: "",
    task: "",
    completed: "",
  });

  function handleTask(e) {
    setTodos({ ...todos, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (todos.task.trim()) {
      addTodo({ ...todos, id: Math.floor(Math.random() * 100) });
      setTodos({ ...todos, task: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="task"
        value={todos.task}
        onChange={handleTask}
        type="text"
        autocomplete="off"
        className="form--input"
      />
      <button className="form--button">Save task</button>
    </form>
  );
}

export default TodoForm;
