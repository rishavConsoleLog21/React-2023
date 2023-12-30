import React from "react";

const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ol>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  );
};

export default Todos;
