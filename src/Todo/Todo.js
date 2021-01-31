import React from "react";

const todo = (props) => {
  const todoStyles = `text-xl flex-grow mx-3 truncate ${
    props.done ? "line-through" : null
  }`;

  return (
    <div className="bg-gray-600 rounded-md text-white my-6  flex justify-start items-center">
      <div className="flex flex-none py-2 pl-3 ">
        <input
          type="checkbox"
          checked={props.done}
          onChange={props.onCheckHandler.bind(this, props.todoIndex)}
        />
      </div>
      <p className={todoStyles}>{props.name}</p>
      <div
        className="h-12 w-12 flex items-center p-3 hover:bg-red-800 cursor-pointer flex-none"
        onClick={props.deleteTodoHandler.bind(this, props.todoIndex)}
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </div>
    </div>
  );
};

export default todo;
