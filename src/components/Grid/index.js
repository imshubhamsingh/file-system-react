import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { showPathEntries } from '@Utils/fileSystem';
import { addEntry } from '@Action/fileSystem';

import Icon from '../Icon';
import Add from '../Add';

class Grid extends Component {
  nodeRef = createRef();
  render() {
    return (
      <Container>
        {this.props.entry.map((entry, _) => (
          <Icon
            entry={entry}
            index={_}
            key={entry.path}
            deleteFn={() => {
              this.setState(prevState => {
                let newIcons = prevState.icons;
                newIcons.splice(_, 1);
                return {
                  newIcons
                };
              });
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
    entry: showPathEntries(path, state.fileSystem)
  };
};

export default connect(
  mapStateToProps,
  { addEntry }
)(Grid);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 40px 0;
`;
