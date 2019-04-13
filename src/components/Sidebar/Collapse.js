import React, { useState } from 'react';
import { CollapseContainer, Line } from './styles';

function Collapse(props) {
  const [visible, handleVisible] = useState(false);
  return (
    <CollapseContainer>
      {props.children(visible, () => handleVisible(!visible))}
    </CollapseContainer>
  );
}

export default Collapse;
