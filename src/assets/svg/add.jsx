/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Add(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
      <path d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6z" />
    </svg>
  );
}

export default Add;
