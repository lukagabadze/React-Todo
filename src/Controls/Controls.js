import React from "react";

const controls = (props) => {
  return (
    <div className="flex justify-center">
      <form
        className="w-5/6"
        onSubmit={(e) => {
          e.preventDefault();
          props.addTodoHandler(e.target.todo.value);
          e.target.todo.value = "";
        }}
      >
        <input
          type="text"
          name="todo"
          className="border w-full focus:outline-none focus:ring-2 focus:ring-black "
        />
      </form>
      <select
        className="ml-10 w-1/6 focus:outline-none focus:ring-2 focus:ring-black"
        onChange={(e) => props.filterChangeHandler(e.target.value)}
      >
        <option value="2">All</option>
        <option value="1">Completed</option>
        <option value="0">Not completed</option>
      </select>
    </div>
  );
};

export default controls;
