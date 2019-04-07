import React, { Component } from 'react';
import styled from 'styled-components';

import FileIcon from '@Image/file.png';
import FolderIcon from '@Image/folder.png';

export default ({ entry }) => {
  let ext = entry.name.split('.').filter(el => el);
  ext = ext[ext.length - 1];
  return (
    <Container>
      <Logo>
        <Img src={entry.type == 'file' ? FileIcon : FolderIcon} />
        {entry.type == 'file' ? <span>{`.${ext}`}</span> : ''}
      </Logo>
      <Name>{entry.name}</Name>
    </Container>
  );
};

const Container = styled.div`
  height: 112px;
  width: 96px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: Lato, sans-serif;
  font-weight: lighter;
  color: #535b62;
  padding: 8px 7px 10px 10px;
  border-radius: 8px;
  transition: background 230ms ease-in;
  &:hover {
    background: #e6f5ff;
  }
`;

const Logo = styled.div`
  position: relative;
  & span {
    position: absolute;
    bottom: 7px;
    left: 4px;
    width: 96%;
    font-weight: bold;
    color: white;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const Img = styled.img``;

const Name = styled.div``;
