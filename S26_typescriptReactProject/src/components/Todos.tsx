import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ol>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text}/>
      ))}
    </ol>
  );
};

export default Todos;
