import React, { Component } from 'react';
import styled from 'styled-components';
import GoBack from './GoBack';

export default class Navigation extends Component {
  state = {
    currentpath: 'root/movies/inception/'
  };

  showPath(path) {
    const pathArr = path.split('/').filter(p => p);
    const len = pathArr.length;
    return pathArr.map((p, _) => {
      return _ === len - 1 ? (
        <span className="currentPath" key={_}>
          {p}
        </span>
      ) : (
        <span key={_}>{` ${p} / `}</span>
      );
    });
  }

  render() {
    return (
      <Container>
        <GoBack fill="#545B61" style={{ marginTop: -2 }} />
        <Path>{this.showPath(this.state.currentpath)}</Path>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 60%;
  display: flex;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Path = styled.p`
  font-family: 'Proxima Nova', sans-serif;
  font-size: 24px;
  color: #81878c;
  font-weight: lighter;
  margin: -6px 0px 0px 28px;
  word-spacing: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  direction: rtl;

  & .currentPath {
    color: #001800;
  }
`;
