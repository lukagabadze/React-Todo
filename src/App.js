import React, { Component } from "react";
import Controls from "./Controls/Controls";
import Todo from "./Todo/Todo";

class App extends Component {
  state = {
    todos: [
      { name: "test test test", done: false },
      { name: "asdasdasd", done: true },
      {
        name:
          "7b3980n7b3980n7b3980n7b3980n7b3980n7b3980n7b3980n7b3980n7b3980n7b3980n7b3980n7b3980n7b3980n7b3980n7b3980n",
        done: false,
      },
    ],
    filter: 2,
  };

  addTodoHandler = (todo) => {
    const todos = [...this.state.todos];
    todos.push({ name: todo, done: false });
    console.log(todos);
    this.setState({ todos: todos });
  };

  deleteTodoHandler = (todoIndex) => {
    const todos = [...this.state.todos];
    todos.splice(todoIndex, 1);
    this.setState({ todos });
  };

  onCheckHandler = (todoIndex) => {
    const todos = [...this.state.todos];
    todos[todoIndex].done = !todos[todoIndex].done;

    this.setState({ todos });
  };

  filterChangeHandler = (filter) => {
    this.setState({ filter });
  };

  render() {
    const todoList = this.state.todos.map((todo, index) => {
      if (this.state.filter != 2 && this.state.filter != todo.done) return null;
      return (
        <Todo
          name={todo.name}
          todoIndex={index}
          done={todo.done}
          onCheckHandler={this.onCheckHandler}
          key={index}
          deleteTodoHandler={this.deleteTodoHandler}
        />
      );
    });

    return (
      <div className="flex justify-center ">
        <div className="bg-gray-300 rounded-md w-1/2 mt-24 p-10">
          <Controls
            addTodoHandler={this.addTodoHandler}
            filterChangeHandler={this.filterChangeHandler}
          />
          {todoList}
        </div>
      </div>
    );
  }
}

export default App;
