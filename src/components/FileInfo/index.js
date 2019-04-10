import React, { Component } from 'react';
import styled from 'styled-components';
import withModal from '@Elements/Modal';

import FileIcon from '@Image/file.png';
import FolderIcon from '@Image/folder.png';

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

const nth = d => {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};
const formatDate = value => {
  let date = new Date(value());
  var day = date.getDate(),
    monthIndex = date.getMonth(),
    year = date.getFullYear().toString();
  return `${day}${nth(day)} ${monthNames[monthIndex]}, ${year}`;
};

class FileInfo extends Component {
  render() {
    const { entry } = this.props;
    let ext = entry.name.split('.').filter(el => el);
    ext = ext[ext.length - 1];
    return (
      <div>
        <Icon>
          <Logo>
            <Img src={entry.type == 'file' ? FileIcon : FolderIcon} />
            {entry.type == 'file' ? <span>{`.${ext}`}</span> : ''}
          </Logo>
        </Icon>

        <Details.Container>
          <Details.Info>
            <Details.Label>Name:</Details.Label>
            <Details.Value>{entry.name}</Details.Value>
          </Details.Info>
          <Details.Info>
            <Details.Label>Size:</Details.Label>
            <Details.Value>{entry.size}kb</Details.Value>
          </Details.Info>
          <Details.Info>
            <Details.Label>Creator Name:</Details.Label>
            <Details.Value>{entry.creatorName}</Details.Value>
          </Details.Info>
          <Details.Info>
            <Details.Label>Created Date:</Details.Label>
            <Details.Value>{formatDate(entry.createdAt)}</Details.Value>
          </Details.Info>
        </Details.Container>
      </div>
    );
  }
}

export default withModal(FileInfo)({
  style: {
    position: 'absolute',
    zIndex: 200
  }
});

const Icon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 44px 0 32px;
`;

const Logo = styled.div`
  position: relative;
  font-family: Lato, sans-serif;
  & span {
    position: absolute;
    bottom: 7px;
    left: 4px;
    width: 96%;
    font-weight: bold;
    color: white;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const Img = styled.img``;

const Details = {
  Container: styled.div``,
  Info: styled.div`
    display: flex;
    font-family: Lato, sans-serif;
    width: 100%;
    padding: 10px 0;
    justify-content: center;
  `,
  Label: styled.div`
    margin-right: 5px;
    width: 50%;
    color: #2f363f;
    text-align: right;
  `,
  Value: styled.div`
    margin-left: 5px;
    color: #81878c;
    width: 50%;
    text-align: left;
  `
};
