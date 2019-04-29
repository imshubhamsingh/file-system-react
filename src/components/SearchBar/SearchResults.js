import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import { FILE } from '@Utils/constants';
import FileIcon from '@Image/file.png';
import FolderIcon from '@Image/folder.png';

import { Result, NoResult, Img, Path } from './styles';

class SearchResults extends Component {
  handleClick = arr => {
    const path = arr.type === FILE ? arr.parentPath : arr.path;
    this.props.history.push(path);
    this.props.closeResult();
  };

  render() {
    const data = this.props.data.filter(
      arr => arr.name.match(this.props.term) !== null
    );
    return (
      <Fragment>
        {data.length > 0 ? (
          data.map(arr => (
            <Result key={arr.path} onClick={() => this.handleClick(arr)}>
              <div>
                <Img src={arr.type == FILE ? FileIcon : FolderIcon} />
                {arr.name}
              </div>

              <Path>{arr.path}</Path>
            </Result>
          ))
        ) : (
          <NoResult>No Result</NoResult>
        )}
      </Fragment>
    );
  }
}

export default withRouter(SearchResults);
