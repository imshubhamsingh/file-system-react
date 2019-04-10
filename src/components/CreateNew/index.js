import React, { Component } from 'react';
import styled from 'styled-components';
import withModal from '@Elements/Modal';

import FileIcon from '@Image/file.png';
import FolderIcon from '@Image/folder.png';

class FileInfo extends Component {
  state = {
    type: 'file',
    name: '',
    creatorName: '',
    date: null
  };
  render() {
    return (
      <Container>
        <Top>
          <Toggle.Container>
            <Toggle.Option
              className={this.state.type === 'file' ? 'selected' : ''}
              onClick={() => this.setState({ type: 'file' })}
            >
              File
            </Toggle.Option>
            <Toggle.Option
              className={this.state.type === 'folder' ? 'selected' : ''}
              onClick={() => this.setState({ type: 'folder' })}
            >
              Folder
            </Toggle.Option>
          </Toggle.Container>
        </Top>

        <Form.Container>
          <Form.Field>
            <Form.Input
              placeholder="Name"
              onChange={event => this.setState({ name: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              placeholder="Creator"
              onChange={event =>
                this.setState({ creatorName: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              placeholder="Size"
              type="number"
              onChange={event => this.setState({ size: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              placeholder="Date"
              type="date"
              onChange={event =>
                this.setState({ date: Date(event.target.value) })
              }
            />
          </Form.Field>
          <Form.Submit>Create</Form.Submit>
        </Form.Container>
      </Container>
    );
  }
}

export default withModal(FileInfo)({});

const Container = styled.div``;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16px 0 32px;
`;

const Toggle = {
  Container: styled.div`
    height: 32px;
    width: 128px;
    border: 1px solid #dde0e4;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    user-select: none;
  `,
  Option: styled.div`
    font-family: Lato, sans-serif;
    font-size: 14px;
    color: #535b62;
    width: 50%;
    cursor: pointer;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    letter-spacing: 0;
    &.selected {
      background: #4ab7ff;
      color: white;
    }
  `
};

const Form = {
  Container: styled.div`
    padding: 1px 48px;
  `,
  Field: styled.div``,
  Input: styled.input`
    width: 100%;
    background: #ffffff;
    border: 1px solid #dde0e4;
    border-radius: 8px;
    font-family: Lato, sans-serif;
    font-size: 14px;
    padding: 10px;
    margin-bottom: 20px;
    &::placeholder {
      color: #afb2b6;
    }
    &[type='date']::placeholder {
      color: #afb2b6;
    }
  `,
  Submit: styled.button`
    background: #4ab7ff;
    border-radius: 8px;
    color: white;
    font-size: 14px;
    border: none;
    cursor: pointer;
    width: 100%;
    height: 40px;
  `
};
