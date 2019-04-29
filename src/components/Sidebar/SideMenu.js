import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import { FILE } from '@Utils/constants';
import { entriesAreSame } from '@Utils/fileSystem';
import Collapse from './Collapse';

import { LinkContainer, DropDownIcon, Line } from './styles';

class SideMenu extends Component {
  state = {
    fileStructure: null
  };
  static getDerivedStateFromProps(nextProps) {
    return {
      fileStructure: nextProps.fileStructure
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     entriesAreSame(nextProps.fileStructure, this.props.fileStructure)
  //   );
  //   if (entriesAreSame(nextProps.fileStructure, this.props.fileStructure)) {
  //     return false;
  //   }
  //   return true;
  // }

  handler = (children, value) => {
    let i = value + 1;
    return children && children.length > 0
      ? children.map((entry, _) => {
          if (entry.type == FILE) return;
          const flag = entry.children
            ? entry.children.length
              ? true
              : false
            : false;
          if (!flag) {
            return (
              <LinkContainer
                key={entry.path}
                onClick={() => this.props.history.push(entry.path)}
                className={
                  this.props.location.pathname === entry.path ? 'selected' : ''
                }
              >
                <div className="link" style={{ marginLeft: `${10 * i}px` }}>
                  {entry.name}
                </div>
              </LinkContainer>
            );
          }
          return (
            <Collapse index={i} key={entry.path}>
              {(visible, handleVisible) => {
                return (
                  <Fragment>
                    <LinkContainer
                      key={entry.path}
                      className={
                        this.props.location.pathname === entry.path
                          ? 'selected'
                          : ''
                      }
                    >
                      <div
                        className="link"
                        style={{
                          marginLeft: `${10 * i}px`,
                          width: '100%'
                        }}
                        onClick={() => this.props.history.push(entry.path)}
                      >
                        {entry.name}
                      </div>
                      <div className="dropdown" onClick={() => handleVisible()}>
                        <DropDownIcon className={visible ? '' : 'clicked'} />
                      </div>
                    </LinkContainer>
                    <div style={{ position: 'relative' }}>
                      {visible ? this.handler(entry.children, i) : ''}
                    </div>
                  </Fragment>
                );
              }}
            </Collapse>
          );
        })
      : '';
  };

  render() {
    return <Fragment>{this.handler(this.state.fileStructure, 0)}</Fragment>;
  }
}

export default withRouter(SideMenu);
