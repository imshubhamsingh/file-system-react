import React, { Component, createRef, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { LOCAL } from '@Utils/constants';
import { showPathEntries } from '@Utils/fileSystem';

import MagnifyIcon from './MagnifyIcon';
import SearchResults from './SearchResults';
import Filter from './Filter';

import { Container, Line, Input } from './styles';

class SearchBar extends Component {
  _ref = createRef();
  state = {
    term: '',
    width: 0,
    mode: LOCAL,
    data: null
  };

  componentDidMount() {
    this.setState(() => {
      const { width } = getComputedStyle(this._ref.current);
      return {
        width
      };
    });
  }

  handleMode = mode => {
    this.setState({
      mode
    });
  };

  render() {
    return (
      <Input placeholder="Search for anything" ref={this._ref}>
        <MagnifyIcon
          fill="#545B61"
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            left: 9,
            marginTop: 5
          }}
          size={15}
        />
        <input
          placeholder="Search for Anything"
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
        {this.state.term.length > 0 ? (
          <Container style={{ width: this.state.width }}>
            <Filter mode={this.state.mode} handleMode={this.handleMode} />
            <Line />
            <SearchResults
              style={{ width: this.state.width }}
              term={this.state.term}
              isDraggable={false}
              data={
                this.state.mode === LOCAL
                  ? this.props.entry
                  : Object.keys(this.props.fileSystem).map(
                      id => this.props.fileSystem[id]
                    )
              }
              closeResult={() => this.setState({ term: '' })}
            />
          </Container>
        ) : (
          ''
        )}
      </Input>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const path = ownProps.location.pathname;
  return {
    entry: showPathEntries(path, state.fileSystem),
    fileSystem: state.fileSystem
  };
};

export default withRouter(connect(mapStateToProps)(SearchBar));
