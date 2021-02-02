import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Todo from "./Todo/Todo";

const todos = (props) => {
  const todoList = props.todos.map((todo, index) => {
    // console.log(todo.id);
    if (props.filter !== 2 && props.filter !== Number(todo.done)) return null;
    return (
      <Draggable key={todo.id} draggableId={todo.id} index={index}>
        {(provided) => (
          <Todo
            provided={provided}
            innerRef={provided.innerRef}
            name={todo.name}
            todoIndex={index}
            done={todo.done}
            onCheckHandler={props.onCheckHandler}
            deleteTodoHandler={props.deleteTodoHandler}
          />
        )}
      </Draggable>
    );
  });

  return (
    <DragDropContext onDragEnd={props.onDragEndHandler}>
      <Droppable droppableId="todos">
        {(provided) => (
          <ul
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {todoList}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default todos;
