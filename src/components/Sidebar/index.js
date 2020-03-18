import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideMenu from './SideMenu';
import { connect } from 'react-redux';

import { generateTreeFromList } from '@Utils/fileSystem';

import { SideBarContainer, Root, ShowMenu } from './styles';

const Sidebar = ({ fileStructure }) => {
  let children = fileStructure[0].children;
  const [toggle, handleToggle] = useState(true);
  return (
    <SideBarContainer toggle={toggle}>
      <ShowMenu onClick={() => handleToggle(!toggle)} />
      <Link to="/" className="rootLink">
        <Root />
      </Link>
      <SideMenu fileStructure={children} />
    </SideBarContainer>
  );
};

const mapStateToProps = state => {
  const fileStructure = generateTreeFromList(state.fileSystem);
  return {
    fileStructure
  };
};

export default connect(mapStateToProps)(Sidebar);
