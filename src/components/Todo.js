function Todo({ todo, toggleComplete, removeTodo }) {
  function handleToggle() {
    toggleComplete(todo.id);
  }

  function handleRemove() {
    removeTodo(todo.id);
  }

  return (
    <div className="elem">
      <li className={todo.completed ? "done" : ""}>{todo.task}</li>
      <div className="inner-elem">
        <input className="inp" type="checkbox" onClick={handleToggle} />
        <button onClick={handleRemove}>X</button>
      </div>
    </div>
  );
}

export default Todo;
