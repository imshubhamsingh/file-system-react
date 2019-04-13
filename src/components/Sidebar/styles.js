import styled, { className } from 'styled-components';

export const SideBarContainer = styled.section`
  background: #f9fafc;
  width: 320px;
  height: 100%;
  position: absolute;
  z-index: 2000;
  & .rootLink {
    text-decoration: none;
  }
  transition: margin-left 250ms ease-in;
  @media screen and (max-width: 768px) {
    margin-left: ${props => (props.toggle ? '-320px' : '0')};
  }
`;

export const ShowMenu = styled.div`
  width: 34px;
  height: 27px;
  position: absolute;
  top: 10px;
  right: -28px;
  background: linear-gradient(to right, #f9fafc, #acb9c3);
  border-radius: 3px;
  box-shadow: 5px 0px 0px #888888;
  display: none;
  z-index: 2000;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Root = styled.div`
  font-family: Lato, sans-serif;
  font-weight: bolder;
  padding: 32px;
  text-decoration: none;
  color: #afb2b6;
  &::after {
    content: 'Root';
    text-transform: uppercase;
  }
`;

export const LinkContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 7px 32px;
  font-family: Lato, sans-serif;
  font-size: 16px;
  position: relative;
  cursor: pointer;
  align-content: space-around;
  color: #2f363f;
  transition: background 250ms ease-in;
  & .dropdown {
    float: right;
    height: 20px;
    width: 20px;
    display: flex;
    margin-top: -22px;
    justify-content: center;
    align-items: center;
  }

  &.selected {
    background: #eeeff1;
  }

  &:hover {
    background: #eeeff1;
  }
`;

export const DropDownIcon = styled.div`
  width: 2px;
  height: 2px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #30363e;
  transition: transform 150ms ease-in;
  &.clicked {
    transform: rotate(180deg);
  }
`;

export const Bar = styled.div`
  height: 20px;
  width: 5px;
  position: absolute;
  z-index: 20;
  background: red;
`;

export const CollapseContainer = styled.div`
  position: relative;
  &::after {
    content: '';
    position: absolute;
  }
`;

export const Line = styled.div`
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    background: black;
    height: 17px;
    left: 40px;
    top: 8px;
  }
`;
