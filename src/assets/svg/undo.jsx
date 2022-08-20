/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Undo(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
      <path d="M10 22L0 12 10 2l1.775 1.775L3.55 12l8.225 8.225z" />
    </svg>
  );
}

export default Undo;
