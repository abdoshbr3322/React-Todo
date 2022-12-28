import { useContext } from "react";
import { TodosProvider } from "../App";

const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const useTodos = () => {
  const [todos, setTodos] = useContext(TodosProvider);

  const updateTodos = (callback, data) => {
    let updatedTodos = callback(todos, data);
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const add = (todos, data) => {
    let newTodos = [...todos];
    newTodos.push({ title: data.title });
    return newTodos;
  };

  const edit = (todos, data) => {
    let newTodos = [...todos];
    newTodos[data.index] = { title: data.title };
    return newTodos;
  };

  const remove = (todos, data) => {
    let newTodos = [...todos];
    newTodos.splice(data.index, 1);
    return newTodos;
  };

  return { todos, updateTodos, add, edit, remove };
};
