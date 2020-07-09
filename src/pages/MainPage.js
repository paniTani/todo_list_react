import React, { Component } from 'react';
import PageWrapper from '../components/PageWrapper.js';
import H1 from '../components/H1.js';
import PrimaryButton from '../components/PrimaryButton.js';
import AddTodoItem from '../components/AddTodoItem.js';

class MainPage extends Component {
  render() {
    return (
      <PageWrapper>
        <H1>My TODO list</H1>
        <AddTodoItem />
      </PageWrapper>
    )
  }
};

export default MainPage;