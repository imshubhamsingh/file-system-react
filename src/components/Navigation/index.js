import React from 'react';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';
import GoBack from './GoBack';

const showPath = path => {
  const pathArr = path.split('/').filter(p => p);
  const len = pathArr.length;
  const arr = [<span key={0}>{` root `}</span>];

  pathArr.map((p, _) => {
    _ === len - 1
      ? arr.push(
          <span className="currentPath" key={_ + 1}>
            / {p}
          </span>
        )
      : arr.push(<span key={_ + 1}>{` / ${p} `}</span>);
  });
  return arr;
};

const goBack = path => {
  let newPath = path.split('/');
  newPath.splice(newPath.length - 1, 1);
  return newPath.join('/');
};

const Navigation = props => {
  return (
    <Container>
      <div
        style={{ marginTop: -2, cursor: 'pointer' }}
        onClick={() => {
          props.history.push(goBack(props.location.pathname));
        }}
      >
        <GoBack fill="#545B61" />
      </div>
      <Path>{showPath(props.location.pathname)}</Path>
    </Container>
  );
};

export default withRouter(Navigation);

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
