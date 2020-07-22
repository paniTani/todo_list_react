import React, { Component } from 'react';
import TodoListItem from '../components/TodoListItem.js';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todoList && (
          this.props.todoList.map((item, index) => {
            return (
              <TodoListItem key={index} dataItem={item} />
            )
          })
        )}
      </ul>
    )
  }
};

export default TodoList;
