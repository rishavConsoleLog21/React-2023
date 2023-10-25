import React from "react";

const TabButton = ({ children, onSelect }) => {
 console.log('TabButton Component Executed');
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
};

export default TabButton;
