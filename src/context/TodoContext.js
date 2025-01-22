import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        task: "Learn React",
    }],
    addTask: (task) => { },
    updateTask: (id, task) => { },
    deleteTask: (id) => { },
});

export const useTodoContext = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;