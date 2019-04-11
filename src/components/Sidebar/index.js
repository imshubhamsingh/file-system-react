import React from 'react';
import SideMenu from './SideMenu';
import { connect } from 'react-redux';

import { generateTreeFromList } from '@Utils/filesystem';

import { SideBarContainer, Root } from './styles';

const Sidebar = ({ fileStructure }) => (
  <SideBarContainer>
    <Root />
    <SideMenu fileStructure={fileStructure} />
  </SideBarContainer>
);

const mapStateToProps = state => {
  return {
    fileStructure: generateTreeFromList(state.fileSystem)[0].children
  };
};

export default connect(
  mapStateToProps,
  null
)(Sidebar);
