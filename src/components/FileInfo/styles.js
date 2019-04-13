import styled from 'styled-components';

export const Icon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 44px 0 32px;
`;

export const Logo = styled.div`
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

export const Img = styled.img``;

export const Details = {
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
