import React, { useState } from "react";

const InputField = ({ value, onChange, placeholder }) => (
  <input
    type="text"
    className="px-4 py-2 w-96 rounded-md shadow focus:outline-none text-gray-800 border border-gray-300"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

const Button = ({ onClick, className, children }) => (
  <button
    className={`text-white ${className} rounded px-4 py-2 hover:bg-opacity-75 focus:outline-none transition-colors duration-300 ease-in-out`}
    onClick={onClick}
  >
    {children}
  </button>
);

const TodoItem = ({ task, onDelete, onUpdate }) => {
  const [updatedTask, setUpdatedTask] = useState(task);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className="flex items-center justify-between p-4 bg-gray-200 rounded-lg mb-3">
      <InputField
        value={updatedTask}
        onChange={(e) => setUpdatedTask(e.target.value)}
        placeholder="Edit your task"
      />
      <div className="flex gap-4">
        {isEditing ? (
          <Button
            onClick={() => {
              onUpdate(updatedTask);
              setIsEditing(false);
            }}
            className="bg-green-600"
          >
            Save
          </Button>
        ) : (
          <Button onClick={() => setIsEditing(true)} className="bg-blue-600">
            Edit
          </Button>
        )}
        <Button onClick={onDelete} className="bg-red-600">
          Remove
        </Button>
      </div>
    </li>
  );
};

const Todo = () => {
  const [currentTodo, setCurrentTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleCurrentTask = (event) => setCurrentTodo(event.target.value);

  const handleAddTodo = () => {
    if (currentTodo.trim() !== "") {
      setTodoList([...todoList, currentTodo]);
      setCurrentTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const filteredArr = todoList.filter((_, currentIndex) => currentIndex !== index);
    setTodoList(filteredArr);
  };

  const handleUpdateTodo = (index, updateValue) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo, currentIndex) =>
        currentIndex === index ? updateValue : todo
      )
    );
  };

  return (
    <div className="flex justify-center">
      <div className="w-3/4 p-6 bg-gray-300 rounded-lg mx-auto">
        <h1 className="text-gray-800 text-4xl font-bold mb-6">My To-Do List</h1>
        <div className="flex items-center gap-6 mb-6">
          <InputField
            value={currentTodo}
            onChange={handleCurrentTask}
            placeholder="Add your task"
          />
          <Button onClick={handleAddTodo} className="bg-green-600">
            Add Task
          </Button>
        </div>

        <ul className="flex flex-col gap-4">
          {todoList.map((task, index) => (
            <TodoItem
              key={index}
              task={task}
              onDelete={() => handleDeleteTodo(index)}
              onUpdate={(updatedTask) => handleUpdateTodo(index, updatedTask)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;


