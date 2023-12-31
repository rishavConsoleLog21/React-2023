import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../store/todo-context";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <ol className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ol>
  );
};

export default Todos;
