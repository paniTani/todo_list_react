import React, { Component } from 'react';

class TodoListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        { this.props.dataItem }
      </li>
    )
  }
};

export default TodoListItem;
