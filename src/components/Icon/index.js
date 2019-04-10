import React, { Component } from 'react';
import styled from 'styled-components';

import FileIcon from '@Image/file.png';
import FolderIcon from '@Image/folder.png';
import Menu from '../Menu';
import FileInfo from '../FileInfo';

class Icon extends Component {
  nodeRef = React.createRef();

  state = {
    visible: false,
    showInfo: false,
    style: {
      right: 0,
      left: 0
    }
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this._handleContextMenu);

    document.addEventListener('click', this._handleMouseLeave);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this._handleContextMenu);

    document.removeEventListener('click', this._handleMouseLeave);
  }

  _handleContextMenu = event => {
    event.preventDefault();

    const path = event.composedPath();

    const wasOutside = !path.includes(this.nodeRef.current) || false;

    if (wasOutside) {
      this.setState({
        visible: false,
        style: {
          right: 0,
          left: 0
        },
        previousValue: {
          right: 0,
          left: 0
        }
      });
      return;
    }

    const clickX = event.clientX;
    const clickY = event.clientY;
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const rootW = this.nodeRef.current.offsetWidth;
    const rootH = this.nodeRef.current.offsetHeight;

    const right = screenW - clickX > rootW;
    const left = !right;
    const top = screenH - clickY > rootH;
    const bottom = !top;

    const style = {
      left: 0,
      top: 0
    };

    if (right) {
      style.left = `${clickX + 5}px`;
    }

    if (left) {
      style.left = `${clickX - rootW - 5}px`;
    }

    if (top) {
      style.top = `${clickY + 5}px`;
    }

    if (bottom) {
      style.top = `${clickY - rootH - 5}px`;
    }

    const prevStyle = {
      top: style.top,
      left: style.left
    };

    this.setState({
      style,
      visible: true,
      prevStyle
    });
  };

  _handleMouseLeave = event => {
    const { visible } = this.state;
    const wasOutside = !(event.target.contains === this.nodeRef.current);

    if (wasOutside && visible)
      this.setState({
        visible: false,
        style: {
          right: 0,
          left: 0
        }
      });
  };

  _handleClick = event => {
    const { visible } = this.state;
    const wasOutside = !(event.target.contains === this.nodeRef);

    if (wasOutside && visible)
      this.setState({
        visible: false,
        style: {
          right: 0,
          left: 0
        }
      });
  };

  _handleScroll = () => {
    const { visible } = this.state;

    if (visible)
      this.setState({
        visible: false,
        style: {
          right: 0,
          left: 0
        }
      });
  };

  render() {
    const { entry } = this.props;
    let ext = entry.name.split('.').filter(el => el);
    ext = ext[ext.length - 1];

    return (
      <Container ref={this.nodeRef}>
        <Logo>
          <Img src={entry.type == 'file' ? FileIcon : FolderIcon} />
          {entry.type == 'file' ? <span>{`.${ext}`}</span> : ''}
        </Logo>
        <Name>{entry.name}</Name>
        {this.state.visible && (
          <Menu
            style={this.state.style}
            content={[
              { info: 'Open', onClick: () => console.log('open') },
              {
                info: 'Get Info',
                onClick: () =>
                  this.setState({
                    showInfo: true
                  })
              },
              {
                info: 'Delete',
                style: { color: 'red' },
                onClick: () => {
                  console.log('delete');
                }
              }
            ]}
          />
        )}
        {this.state.showInfo ? (
          <FileInfo
            title="File Info"
            style={this.state.prevStyle}
            closeFn={() =>
              this.setState({
                showInfo: false
              })
            }
            entry={{
              type: entry.type,
              name: entry.name,
              path: '/',
              ext: ext,
              size: entry.size,
              createdAt: entry.createdAt,
              creatorName: entry.creatorName
            }}
          />
        ) : (
          ''
        )}
      </Container>
    );
  }
}

export default Icon;

const Container = styled.div`
  height: 117px;
  width: 96px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: Lato, sans-serif;
  font-weight: lighter;
  color: #535b62;
  margin-bottom: 22px;
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
