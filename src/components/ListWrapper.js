import React, { Component } from 'react';
import AddTodoItem from '../components/AddTodoItem.js';
import TodoList from '../components/TodoList.js';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTextArray: [],
    };

    this.addItemList = this.addItemList.bind(this);
  }

  addItemList(todo) {
    this.setState(state => ({
        todoTextArray: [...state.todoTextArray, todo],
      })
    );
  }

  render() {
    return (
      <div>
        <AddTodoItem addItemListFunction={this.addItemList} />
        <h3>items:</h3>
        <TodoList todoList={this.state.todoTextArray} addToList={this.addItemList} />
        { this.addToList }
      </div>
    )
  }
};

export default MainPage;