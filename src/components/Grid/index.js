import React, { Component } from 'react';
import styled from 'styled-components';

import Icon from '../Icon';
import Add from '../Add';

const initialData = [
  {
    type: 'folder',
    name: 'apps',
    path: '/apps',
    size: 123,
    createdAt: Date.now,
    creatorName: 'Shubham Singh',
    parent: '/'
  },
  {
    type: 'folder',
    name: 'picture',
    path: '/picture',
    size: 123,
    creatorName: 'Shubham Singh',
    createdAt: Date.now
  },
  {
    type: 'folder',
    name: 'videos',
    path: '/videos',
    size: 123,
    createdAt: Date.now,
    creatorName: 'Shubham Singh',
    children: [
      {
        type: 'file',
        name: 'a.docx',
        path: '/',
        ext: 'docxdffdsfd',
        size: 123,
        createdAt: Date.now,
        creatorName: 'Shubham Singh'
      }
    ]
  },
  {
    type: 'file',
    name: 'a.docx',
    path: '/',
    ext: 'docxdffdsfd',
    size: 123,
    createdAt: Date.now,
    creatorName: 'Shubham Singh'
  },
  {
    type: 'file',
    name: 'a.docx',
    path: '/',
    ext: 'docxdffdsfd',
    size: 123,
    createdAt: Date.now,
    creatorName: 'Shubham Singh'
  }
];

export default class Grid extends Component {
  nodeRef = React.createRef();

  state = {
    icons: initialData,
    style: {
      right: 0,
      left: 0
    }
  };
  render() {
    return (
      <Container>
        {this.state.icons.map((entry, _) => (
          <Icon entry={entry} index={_} />
        ))}
        <Add />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 40px 0;
`;
