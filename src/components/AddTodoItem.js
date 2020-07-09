import React, { Component } from 'react';
import styled from 'styled-components';
import { space } from 'styled-system'
import PrimaryButton from '../components/PrimaryButton.js';
import PrimaryInput from '../components/PrimaryInput.js';

const AddTodoWrapper = styled.div`
    ${space};
`;

class AddTodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      todoTextArray: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.addToList = this.addToList.bind(this);
    this.clearValue = this.clearValue.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.addToList();
    }
  }

  addToList() {
    this.setState(state => ({
        todoTextArray: [...state.todoTextArray, state.value],
      })
    );

    this.clearValue();
  }

  clearValue() {
    this.setState({ value: '' });
  }

  render() {
    return (
      <AddTodoWrapper>
        <PrimaryInput type="text" name="item-name" value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
        <PrimaryButton ml="20px" onClick={ this.addToList }>Add</PrimaryButton>
        <br />
        { this.state.value }
        <br />
        <h3>item:</h3>
        {this.state.todoTextArray.map((item, index) => {
            return (
              <p key={index}>
                { item }
              </p>
            )
          })
        }
      </AddTodoWrapper>
    )
  }
};

export default AddTodoItem;