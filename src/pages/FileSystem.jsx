import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from '@Components/Sidebar';
import ViewFiles from '@Components/ViewFiles';

import '@Styles/App.scss';

export default class FileSystem extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Sidebar />
          <ViewFiles />
        </Container>
      </BrowserRouter>
    );
  }
}

const Container = styled.div``;
