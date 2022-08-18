/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Remove(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
      <path d="M5 13v-2h14v2z" />
    </svg>
  );
}

export default Remove;
