import React, { Component, Fragment } from 'react';

import { FILE } from '@Utils/constants';
import Collapse from './Collapse';

import { LinkContainer, DropDownIcon } from './styles';

const handler = (children, value) => {
  let i = value + 1;
  return children.map((entry, _) => {
    if (entry.type == FILE) return;
    if (!entry.children) {
      return (
        <LinkContainer key={entry.path}>
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
              <LinkContainer key={entry.path}>
                <div
                  className="link"
                  style={{
                    marginLeft: `${10 * i}px`
                  }}
                >
                  {entry.name}
                </div>
                <div className="dropdown" onClick={() => handleVisible()}>
                  <DropDownIcon className={visible ? '' : 'clicked'} />
                </div>
              </LinkContainer>
              <div>{visible ? handler(entry.children, i) : ''}</div>
            </Fragment>
          );
        }}
      </Collapse>
    );
  });
};

const SideMenu = ({ fileStructure }) => (
  <Fragment>{handler(fileStructure, 0)}</Fragment>
);

export default SideMenu;
