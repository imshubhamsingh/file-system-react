import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from '@Components/Sidebar';
import FileSystem from '@Components/FileSystem';

import '@Styles/App.scss';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Sidebar />
          <FileSystem />
        </Container>
      </BrowserRouter>
    );
  }
}

const Container = styled.div``;
