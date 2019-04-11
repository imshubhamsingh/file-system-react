import React, { Component } from 'react';
import { FilterContainer } from './styles';

import { LOCAL, GLOBAL } from '@Utils/constants';

export default class Filter extends Component {
  render() {
    return (
      <FilterContainer>
        Search:
        <FilterContainer.Options>
          <span
            className={this.props.mode === LOCAL ? 'selected' : ''}
            onClick={() => this.props.handleMode(LOCAL)}
          >
            Local
          </span>
          <span
            className={this.props.mode === GLOBAL ? 'selected' : ''}
            onClick={() => this.props.handleMode(GLOBAL)}
          >
            Global
          </span>
        </FilterContainer.Options>
      </FilterContainer>
    );
  }
}
