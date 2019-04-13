import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import SEO from '@Components/SEO';

import { showPathEntries } from '@Utils/fileSystem';
import { addEntry, deleteEntry } from '@Action/fileSystem';

import Icon from '../Icon';
import Add from '../Add';

import FolderIcon from '@Image/folder.png';

class Grid extends Component {
  componentDidMount() {
    if (
      this.props.fileSystem.find(
        el => el.path === this.props.location.pathname
      ) === undefined
    ) {
      this.props.history.push('/');
    }
  }

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
              this.props.deleteEntry(entry.path);
            }}
          />
        ))}
        <Add
          saveEntry={value => {
            this.props.addEntry({
              ...value,
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
