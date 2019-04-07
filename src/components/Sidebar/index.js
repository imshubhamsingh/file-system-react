import React, { Component } from 'react';
import styled from 'styled-components';

export default class Sidebar extends Component {
  render() {
    return (
      <Container>
        <div>root</div>
      </Container>
    );
  }
}

const Container = styled.section`
  background: #f9fafc;
  width: 320px;
  height: 100vh;
  position: absolute;
  transition: margin-left 250ms ease-in;
  @media screen and (max-width: 768px) {
    margin-left: -320px;
  }
`;
