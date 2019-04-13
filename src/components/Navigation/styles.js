import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  display: flex;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Path = styled.p`
  font-family: 'Proxima Nova', sans-serif;
  font-size: 24px;
  color: #81878c;
  font-weight: lighter;
  margin: -6px 0px 0px 28px;
  word-spacing: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  direction: rtl;

  & .currentPath {
    color: #001800;
  }
`;
