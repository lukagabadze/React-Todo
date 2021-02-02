import React, { Component } from "react";
import Controls from "./Controls/Controls";
import Todos from "./Todos/Todos";

class App extends Component {
  state = {
    todos: [
      { id: "76v-43n", name: "test test test", done: false },
      { id: "7qn0fv6b", name: "asdasdasdd", done: true },
      {
        id: "q6b384=nm",
        name:
          "7b3980n7b3980n7b3980n7b3980n7b3980n7b3980n7b3980n7b3980n7b3980n7b3980n7b3980n7b3980n7b3980n7b3980n7b3980n",
        done: false,
      },
    ],
    filter: 2,
    activeInd: 0,
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
    this.setState({ filter: Number(filter) });
  };

  onDragEndHandler = (result) => {
    console.log(this.state.todos);
    const todos = [...this.state.todos];
    const movedTodo = todos.splice(result.source.index, 1);
    todos.splice(result.destination.index, 0, ...movedTodo);
    this.setState({ todos });
  };

  render() {
    return (
      <div className="flex justify-center ">
        <div className="bg-gray-300 rounded-md w-1/2 mt-24 p-10">
          <Controls
            addTodoHandler={this.addTodoHandler}
            filterChangeHandler={this.filterChangeHandler}
          />
          <Todos
            todos={this.state.todos}
            filter={this.state.filter}
            activeInd={this.state.activeInd}
            onCheckHandler={this.onCheckHandler}
            deleteTodoHandler={this.deleteTodoHandler}
            onDragEndHandler={this.onDragEndHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
