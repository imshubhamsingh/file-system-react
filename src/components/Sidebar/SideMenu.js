import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import Collapse from './Collapse';

class SideMenu extends Component {
  handler(children, value) {
    let i = value + 1;
    return children.map((subOption, _) => {
      if (!subOption.children) {
        return (
          <LinkContainer key={subOption.name}>
            <div className="link" style={{ marginLeft: `${10 * i}px` }}>
              {subOption.name}
            </div>
          </LinkContainer>
        );
      }
      return (
        <Collapse index={i}>
          {(visible, handleVisible) => {
            return (
              <Fragment>
                <LinkContainer key={subOption.name}>
                  <div
                    className="link"
                    style={{
                      marginLeft: `${10 * i}px`
                    }}
                  >
                    {subOption.name}
                  </div>
                  <div className="dropdown" onClick={() => handleVisible()}>
                    <DropDownIcon className={visible ? '' : 'clicked'} />
                  </div>
                </LinkContainer>
                <div>{visible ? this.handler(subOption.children, i) : ''}</div>
              </Fragment>
            );
          }}
        </Collapse>
      );
    });
  }

  render() {
    return <div>{this.handler(this.props.data, 0)}</div>;
  }
}

export default SideMenu;

const LinkContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 7px 32px;
  font-family: Lato, sans-serif;
  font-size: 16px;
  position: relative;
  cursor: pointer;
  align-content: space-around;
  color: #2f363f;
  transition: background 250ms ease-in;
  & .dropdown {
    float: right;
    height: 20px;
    width: 20px;
    display: flex;
    margin-top: -22px;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    background: #eeeff1;
  }
`;

const DropDownIcon = styled.div`
  width: 2px;
  height: 2px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #30363e;
  transition: transform 150ms ease-in;
  &.clicked {
    transform: rotate(180deg);
  }
`;

const Bar = styled.div`
  height: 20px;
  width: 5px;
  position: absolute;
  z-index: 20;
  background: red;
`;
