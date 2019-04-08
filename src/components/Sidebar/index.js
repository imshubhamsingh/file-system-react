import React, { Component } from 'react';
import styled from 'styled-components';

import SideMenu from './SideMenu';

const initialData = [
  {
    type: 'folder',
    name: 'apps',
    path: '/apps',
    size: 123,
    createdAt: Date.now,
    parent: '/'
  },
  {
    type: 'folder',
    name: 'picture',
    path: '/picture',
    size: 123,
    createdAt: Date.now
  },
  {
    type: 'folder',
    name: 'videos',
    path: '/videos',
    size: 123,
    createdAt: Date.now,
    children: [
      {
        type: 'folder',
        name: 'ab',
        path: '/',
        ext: 'docxdffdsfd',
        size: 123,
        createdAt: Date.now,
        children: [
          {
            type: 'folder',
            name: 'picture',
            path: '/picture',
            size: 123,
            createdAt: Date.now
          },
          {
            type: 'folder',
            name: 'picture',
            path: '/picture',
            size: 123,
            createdAt: Date.now,

            children: [
              {
                type: 'file',
                name: 'p.jpg',
                path: '/picture',
                size: 123,
                createdAt: Date.now
              }
            ]
          }
        ]
      }
    ]
  },
  {
    type: 'file',
    name: 'a.docx',
    path: '/',
    ext: 'docxdffdsfd',
    size: 123,
    createdAt: Date.now
  }
];

export default class Sidebar extends Component {
  render() {
    return (
      <Container>
        <Root />
        <SideMenu data={initialData} />
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

const Root = styled.div`
  font-family: Lato, sans-serif;
  font-weight: bolder;
  padding: 32px;
  color: #afb2b6;
  &::after {
    content: 'Root';
    text-transform: uppercase;
  }
`;
