import React, { Component } from 'react';
import styled from 'styled-components';

import FileIcon from '@Image/file.png';
import FolderIcon from '@Image/folder.png';

class SearchResults extends Component {
  state = {
    mode: 'local'
  };
  render() {
    const data = this.props.data.filter(
      arr => arr.name.match(this.props.term) !== null
    );
    return (
      <Container style={this.props.style}>
        <Filter>
          Search:
          <Filter.Options>
            <span
              className={this.state.mode === 'local' ? 'selected' : ''}
              onClick={() => this.setState({ mode: 'local' })}
            >
              Local
            </span>
            <span
              className={this.state.mode === 'global' ? 'selected' : ''}
              onClick={() => this.setState({ mode: 'global' })}
            >
              Global
            </span>
          </Filter.Options>
        </Filter>
        <Line />
        {data.map(arr => (
          <Result>
            <Img src={arr.type == 'file' ? FileIcon : FolderIcon} />
            {arr.name}
          </Result>
        ))}
      </Container>
    );
  }
}

export default SearchResults;

const Container = styled.div`
  position: absolute;
  left: -1px;
  top: 33px;
  z-index: 2000;
  background: #ffffff;
  border: 1px solid rgba(221, 224, 228, 0.7);
  box-shadow: 0 16px 64px 0 rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;

const Filter = styled.div`
  display: flex;
  padding: 10px;
  justify-content: flex-start;
`;

Filter.Options = styled.div`
  border: none;
  & span {
    background: #82878b;
    padding: 2px;
    border-radius: 8px;
    color: white;
    margin: 20px 5px;
    font-size: 15px;
    cursor: pointer;
    padding: 2px 10px;
    &.selected {
      background: #051702;
    }
  }
`;

const Line = styled.hr`
  background: #eeeff1;
  padding: 0;
  margin: -3px 0;
  opacity: 0.25;
`;

const Result = styled.div`
  padding: 10px;
  display: flex;
  border-bottom: 2px solid rgba(238, 239, 241, 0.5);
  &:hover {
    background: #eeeff1;
  }
`;

const Img = styled.img`
  width: 23px;
  height: 20px;
  margin-right: 7px;
`;
