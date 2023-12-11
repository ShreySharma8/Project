import { useState } from "react";

const Todo = () => {

    const [currentTodo, setCurrentTodo] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleCurrentTask = (event) => {
        setCurrentTodo(event.target.value);
    }

    const handleAddTodo = () => {
        setTodoList([...todoList, currentTodo]);
        setCurrentTodo("");
    }

    const handleDeleteTodo = (index) => {
        let filteredArr = todoList.filter((_, currentIndex) => currentIndex !== index);
        setTodoList(filteredArr);
        console.log(filteredArr);
    }
    
    const handleUpdateTodo =(currentIndex, updateValue) =>{
        setTodoList ((prevTodos) => {
            return(
                prevTodos.map((todo,index) => {
                    if(index === currentIndex){
                        return updateValue;
                    } else{
                        return todo;
                    }
                })
            );
        });
    };
    const updateValue = currentTodo;
// border-4 border-red-500 p-6


    return (
        <div className="w-1/2 p-4 bg-black rounded-lg m-5">
            <h1 className="p-1  text-white text-[20px]">My Todo List</h1>
            <div className="flex gap-3 items-stretch justify-between">
                <input
                    type="text"
                    className="px-2 w-[500px] rounded-md shadow"
                    placeholder="Add your task"
                    value={currentTodo}
                    onChange={handleCurrentTask}
                />
                <button
                    className="text-bold bg-lime-500 p-1 rounded"
                    onClick={handleAddTodo}
                >
                    Add Task
                </button>
            </div>

            <ul className="flex flex-col gap-1 py-4">

                {
                    todoList.map((task, index) => (
                        <li key={index} className="flex gap-2 justify-between p-2 bg-orange-300 rounded-lg">
                            <p className="text-[20px]">
                                {task}
                            </p>
                            <button
                                className="text-bold text-white bg-black p-1 rounded"
                                onClick={() => handleDeleteTodo(index)}
                            >
                                Remove
                            </button>

                            <button className="text-bold bg-purple-500 p-1 rounded" onClick={()=>handleUpdateTodo(index, updateValue)}>
                                Update
                            </button>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default Todo;