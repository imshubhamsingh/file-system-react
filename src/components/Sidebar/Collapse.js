import React, { Component } from 'react';
import styled from 'styled-components';

export default class Collapse extends Component {
  state = {
    visible: false
  };

  handleVisible = () => {
    this.setState(prevState => ({
      visible: !prevState.visible
    }));
  };

  render() {
    return this.props.children(this.state.visible, this.handleVisible);
  }
}
