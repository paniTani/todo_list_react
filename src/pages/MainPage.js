import React, { Component } from 'react';
import PageWrapper from '../components/PageWrapper.js';
import H1 from '../components/base/H1.js';
import ListWrapper from '../components/ListWrapper.js';

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageWrapper>
        <H1>My TODO list</H1>
        <ListWrapper />
      </PageWrapper>
    )
  }
};

export default MainPage;