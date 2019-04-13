import styled from 'styled-components';

export const Container = styled.div``;

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16px 0 32px;
`;

export const Toggle = {
  Container: styled.div`
    height: 32px;
    width: 128px;
    border: 1px solid #dde0e4;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    user-select: none;
  `,
  Option: styled.div`
    font-family: Lato, sans-serif;
    font-size: 14px;
    color: #535b62;
    width: 50%;
    cursor: pointer;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    letter-spacing: 0;
    &.selected {
      background: #4ab7ff;
      color: white;
    }
  `
};

export const Form = {
  Container: styled.div`
    padding: 1px 48px;
    & .formField {
      position: relative;
      & .field {
        width: 100%;
        background: #ffffff;
        border: 1px solid #dde0e4;
        border-radius: 8px;
        font-family: Lato, sans-serif;
        font-size: 14px;
        padding: 10px;
        position: relative;
        margin-bottom: 20px;
        &::placeholder {
          color: #afb2b6;
        }
        &[type='date']::placeholder {
          color: #afb2b6;
        }
      }
    }
  `,
  Submit: styled.div`
    background: #4ab7ff;
    border-radius: 8px;
    color: white;
    font-size: 14px;
    justify-content: center;
    font-family: Lato, sans-serif;
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    width: 100%;
    height: 40px;
    transition: opacity 250ms ease-in;
    &.disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `
};

export const Error = styled.div`
  color: red;
  position: absolute;
  top: 42px;
  left: 5px;
  font-size: 12px;
  font-family: Lato, sans-serif;
`;
