import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 30px 15px;
    height: calc(100vh - 60px);
    // TODO change to mixin or styled-system property
    display: flex;
    flex-direction: column;
    align-items: center;
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