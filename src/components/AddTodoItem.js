import React, { Component } from 'react';
import styled from 'styled-components';
import { space } from 'styled-system'
import PrimaryButton from './base/PrimaryButton.js';
import PrimaryInput from './base/PrimaryInput.js';

const AddTodoWrapper = styled.div`
    ${space};
`;

class AddTodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
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
    this.props.addItemListFunction(this.state.value);
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
      </AddTodoWrapper>
    )
  }
};

export default AddTodoItem;