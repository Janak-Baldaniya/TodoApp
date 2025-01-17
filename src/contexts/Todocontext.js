import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        { id: 1, title: "Learn React", completed: false },

    ],
    addTodo : (todo) => {},
    deleteTodo : (id) => {},
    toggleTodo : (id) => {},
    updateTodo : (id, title) => {}
});

export const useTodo = () => {
    return useContext(TodoContext);
};

export const Todoprovider = TodoContext.Provider;