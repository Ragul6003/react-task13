
import { useState, useRef, useEffect } from "react";
import { useTodos } from "../context/TodoContext";

function TodoForm({ editingTodo, setEditingTodo }) {

    const [task, setTask] = useState("");
    const inputRef = useRef(null);
    const { todos, setTodos } = useTodos();

    useEffect(() => {
        if (editingTodo) {
            setTask(editingTodo.text);
            inputRef.current.focus();
        }
    }, [editingTodo]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!task.trim()) {
            alert("Please enter a task!");
            inputRef.current.focus();
            return;
        }

        if (editingTodo) {
            setTodos(todos.map(todo =>
                todo.id === editingTodo.id
                    ? { ...todo, text: task.trim() }
                    : todo
            ));

            setEditingTodo(null);
        } else {
            const newTodo = {
                id: Date.now(),
                text: task.trim(),
                completed: false
            };

            setTodos([...todos, newTodo]);
        }

        setTask("");
        inputRef.current.focus();
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>

            <input
                ref={inputRef}
                type="text"
                placeholder="Enter your task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button type="submit">
                {editingTodo ? "Update" : "Add Task"}
            </button>

        </form>
    );
}

export default TodoForm;
