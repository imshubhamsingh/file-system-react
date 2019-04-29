import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import md5 from 'md5';

import SEO from '@Components/SEO';

import { showPathEntries, entriesAreSame } from '@Utils/fileSystem';
import { FOLDER } from '@Utils/constants';
import { addEntry, deleteEntry } from '@Action/fileSystem';

import Icon from '../Icon';
import Add from '../Add';

import FolderIcon from '@Image/folder.png';

class Grid extends Component {
  componentDidMount() {
    if (
      !Object.keys(this.props.fileSystem).includes(
        md5(this.props.location.pathname + FOLDER)
      )
    ) {
      this.props.history.push('/');
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.location.pathname === nextProps.location.pathname) {
  //     if (entriesAreSame(this.props.entry, nextProps.entry)) {
  //       return false;
  //     }
  //     return true;
  //   }
  //   return true;
  // }

  render() {
    return (
      <Container>
        <SEO
          url={this.props.match.url}
          title={this.props.match.url}
          image={FolderIcon}
          description={this.props.match.url}
        />
        {this.props.entry.map((entry, _) => (
          <Icon
            entry={entry}
            index={_}
            key={`${entry.path}_${entry.type}`}
            deleteFn={() => {
              this.props.deleteEntry(md5(entry.path + entry.type));
            }}
          />
        ))}
        <Add
          saveEntry={value => {
            this.props.addEntry({
              ...value,
              parentID: md5(this.props.match.url + FOLDER),
              parentPath: this.props.match.url
            });
          }}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const path = ownProps.match.url;
  return {
    entry: showPathEntries(path, state.fileSystem),
    fileSystem: state.fileSystem
  };
};

export default connect(
  mapStateToProps,
  { addEntry, deleteEntry }
)(Grid);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 40px 0;
`;
