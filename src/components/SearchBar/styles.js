import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: -1px;
  top: 33px;
  z-index: 2000;
  background: #ffffff;
  border: 1px solid rgba(221, 224, 228, 0.7);
  box-shadow: 0 16px 64px 0 rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;

export const Line = styled.hr`
  background: #eeeff1;
  padding: 0;
  margin: -3px 0;
  opacity: 0.25;
`;

export const Input = styled.div`
  margin-top: -6px;
  width: 40%;
  position: relative;
  height: 32px;
  display: flex;
  border-radius: 8px;
  border: 1px solid #dde0e4;
  padding: 0 8px;
  font-family: Lato, sans-serif;
  outline: none;
  input {
    border: 0;
    width: 100%;
    font-size: 15px;
    padding: 0 0 0 23px;
    & ::placeholder {
      color: #afb2b6;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  padding: 10px;
  justify-content: flex-start;
`;

FilterContainer.Options = styled.div`
  border: none;
  & span {
    background: #82878b;
    padding: 2px;
    border-radius: 8px;
    color: white;
    margin: 20px 5px;
    font-size: 15px;
    cursor: pointer;
    padding: 2px 10px;
    &.selected {
      background: #051702;
    }
  }
`;

export const Result = styled.div`
  padding: 10px;
  display: flex;
  white-space: nowrap;
  max-height: 100px;
  justify-content: space-between;
  border-bottom: 2px solid rgba(238, 239, 241, 0.5);
  &:hover {
    background: #eeeff1;
  }
`;

export const Path = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #b1b1b1;
`;

export const Img = styled.img`
  width: 23px;
  height: 20px;
  margin-bottom: -3px;
  margin-right: 6px;
`;

export const NoResult = styled.div`
  padding: 10px;
  display: flex;
  border-bottom: 2px solid rgba(238, 239, 241, 0.5);
`;
