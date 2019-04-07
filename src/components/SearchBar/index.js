import React, { Component } from 'react';
import styled from 'styled-components';

import MagnifyIcon from './MagnifyIcon';

export default class SearchBar extends Component {
  render() {
    return (
      <Input placeholder="Search for anything">
        <MagnifyIcon
          fill="#545B61"
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            left: 9,
            marginTop: 8
          }}
          size={15}
        />
        <input placeholder="Search for Anything" />
      </Input>
    );
  }
}

const Input = styled.div`
  margin-top: -6px;
  width: 40%;
  position: relative;
  height: 32px;
  display: flex;
  border-radius: 8px;
  border: 1px solid #dde0e4;
  padding: 0 8px;
  font-family: Lato, sans-serif;
  outline: none;
  input {
    border: 0;
    width: 100%;
    font-size: 15px;
    padding: 0 0 0 23px;
    & ::placeholder {
      color: #afb2b6;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;
