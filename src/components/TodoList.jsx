
import { useState } from "react";
import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";

function TodoList({ setEditingTodo }) {

    const { todos, setTodos } = useTodos();
    const [filter, setFilter] = useState("All");

    const filteredTodos = todos.filter(todo => {
        if (filter === "Completed") return todo.completed;
        if (filter === "Pending") return !todo.completed;
        return true;
    });

    return (
        <div>

            <div className="filter-buttons">

                {["All", "Completed", "Pending"].map(item => (
                    <button
                        key={item}
                        className={filter === item ? "active" : ""}
                        onClick={() => setFilter(item)}
                    >
                        {item}
                    </button>
                ))}

            </div>

            <div className="todo-list">

                {filteredTodos.length === 0 ? (
                    <p className="empty">No tasks found!</p>
                ) : (
                    filteredTodos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            setEditingTodo={setEditingTodo}
                        />
                    ))
                )}

            </div>

            {todos.length > 0 && (
                <button
                    className="clear-btn"
                    onClick={() => setTodos([])}
                >
                    Clear All
                </button>
            )}

        </div>
    );
}

export default TodoList;
