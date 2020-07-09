import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 30px 15px;
    //background-color: var(--turquoiseBlue);
    height: calc(100vh - 60px);
`;

class PageWrapper extends Component {
  render() {
    return (
      <Wrapper>
        { this.props.children }
      </Wrapper>
    )
  }
};

export default PageWrapper;