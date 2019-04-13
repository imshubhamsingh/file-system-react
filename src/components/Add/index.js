import React, { Fragment, useState, memo } from 'react';
import styled from 'styled-components';
import CreateNew from '../CreateNew';

function Add(props) {
  const [open, handleOpen] = useState(false);
  return (
    <Fragment>
      <Container onClick={() => handleOpen(true)}>+</Container>
      {open ? (
        <CreateNew
          title="Create New"
          closeFn={() => handleOpen(false)}
          addEntry={value => props.saveEntry(value)}
        />
      ) : (
        ''
      )}
    </Fragment>
  );
}

export default memo(Add);

const Container = styled.div`
  height: 109px;
  width: 96px;
  border: 3px dashed #dee0e4;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  align-items: center;
  font-size: 30px;
  color: #dee0e4;
  margin: -6px 21px;
  cursor: copy;
`;
