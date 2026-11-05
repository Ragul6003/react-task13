
import { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {

    const [todos, setTodos] = useState(() => {
        const data = localStorage.getItem("todos");
        return data ? JSON.parse(data) : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodoContext.Provider>
    );
}

export function useTodos() {
    return useContext(TodoContext);
}
