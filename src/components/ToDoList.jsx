import React, { useState } from "react";

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() == "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveTodo = (index) => {
    setTodos(todos.filter((_, i) => i == index));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">To-Do List</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <ul className="List-group">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => handleRemoveTodo(index)}
          >
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
