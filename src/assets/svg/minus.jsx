/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Minus(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M5 10.75v-1.5h10v1.5z" />
    </svg>
  );
}

export default Minus;
