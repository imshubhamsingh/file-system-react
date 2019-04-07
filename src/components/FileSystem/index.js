import React, { Component } from 'react';
import styled from 'styled-components';

import Navigation from '../Navigation';
import SearchBar from '../SearchBar';
import Grid from '../Grid';

export default class FileSystem extends Component {
  render() {
    return (
      <Container>
        <TopBar>
          <Navigation />
          <SearchBar />
        </TopBar>
        <Grid />
      </Container>
    );
  }
}

const Container = styled.div`
  padding: 41px;
  margin-left: 320px;
  transition: margin-left 250s ease-in;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    padding: 55px 15px 15px 15px;
  }
`;

const TopBar = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
