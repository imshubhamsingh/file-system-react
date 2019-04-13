import styled from 'styled-components';

export const Container = styled.div`
  height: 117px;
  width: 96px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: Lato, sans-serif;
  font-weight: lighter;
  color: #535b62;
  margin-bottom: 22px;
  padding: 8px 7px 10px 10px;
  border-radius: 8px;
  transition: background 230ms ease-in;
  &:hover {
    background: #e6f5ff;
  }
`;

export const Logo = styled.div`
  position: relative;
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

export const Img = styled.img``;

export const Name = styled.div``;
