
import { useTodos } from "../context/TodoContext";

function TodoItem({ todo, setEditingTodo }) {

    const { todos, setTodos } = useTodos();

    const toggleComplete = () => {
        setTodos(todos.map(item =>
            item.id === todo.id
                ? { ...item, completed: !item.completed }
                : item
        ));
    };

    const deleteTodo = () => {
        setTodos(todos.filter(item => item.id !== todo.id));
    };

    return (
        <div className="todo-item">

            <input
                type="checkbox"
                checked={todo.completed}
                onChange={toggleComplete}
            />

            <span className={todo.completed ? "completed" : ""}>
                {todo.text}
            </span>

            <button
                className="edit-btn"
                onClick={() => setEditingTodo(todo)}
            >
                Edit
            </button>

            <button
                className="delete-btn"
                onClick={deleteTodo}
            >
                Delete
            </button>

        </div>
    );
}

export default TodoItem;
