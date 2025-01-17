import React, { useState } from "react";
import { useTodo } from "../contexts/Todocontext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({
      title: todo,
      completed: false,
    });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 text-3xl hover:bg-white/30"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button className="relative z-0 rounded bg-pink-500 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-pink-700 after:transition-[all_0.3s_ease]  hover:after:w-full ml-2 text-3xl">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
