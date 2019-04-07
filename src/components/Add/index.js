import React, { Component } from 'react';
import styled from 'styled-components';

export default class Add extends Component {
  render() {
    return <Container>+</Container>;
  }
}

const Container = styled.div`
  height: 109px;
  width: 96px;
  border: 3px dashed #dee0e4;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  align-items: center;
  font-size: 30px;
  color: #dee0e4;
  margin: -6px 21px;
  cursor: copy;
`;
