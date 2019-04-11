import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import MagnifyIcon from './MagnifyIcon';
import SearchResults from './SearchResults';

const initialData = [
  {
    type: 'folder',
    name: 'apps',
    path: '/apps',
    size: 123,
    createdAt: '2019-04-07',
    creatorName: 'Shubham Singh',
    parent: '/'
  },
  {
    type: 'folder',
    name: 'picture',
    path: '/picture',
    size: 123,
    creatorName: 'Shubham Singh',
    createdAt: '2019-04-07'
  },
  {
    type: 'folder',
    name: 'videos',
    path: '/videos',
    size: 123,
    createdAt: '2019-04-07',
    creatorName: 'Shubham Singh',
    children: [
      {
        type: 'file',
        name: 'a.docx',
        path: '/',
        ext: 'docxdffdsfd',
        size: 123,
        createdAt: '2019-04-07',
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
    createdAt: '2019-04-07',
    creatorName: 'Shubham Singh'
  },
  {
    type: 'file',
    name: 'a.docx',
    path: '/',
    ext: 'docxdffdsfd',
    size: 123,
    createdAt: '2019-04-07',
    creatorName: 'Shubham Singh'
  }
];
export default class SearchBar extends Component {
  _ref = createRef();
  state = {
    term: '',
    width: 0
  };

  componentDidMount() {
    this.setState(prevState => {
      const { width } = getComputedStyle(this._ref.current);
      return {
        width
      };
    });
  }

  render() {
    return (
      <Input placeholder="Search for anything" ref={this._ref}>
        <MagnifyIcon
          fill="#545B61"
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            left: 9,
            marginTop: 5
          }}
          size={15}
        />
        <input
          placeholder="Search for Anything"
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
        {this.state.term.length > 0 ? (
          <SearchResults
            style={{ width: this.state.width }}
            term={this.state.term}
            isDraggable={false}
            data={initialData}
          />
        ) : (
          ''
        )}
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
