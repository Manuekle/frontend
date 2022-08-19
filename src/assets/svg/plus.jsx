/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Plus(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M9.25 15v-4.25H5v-1.5h4.25V5h1.5v4.25H15v1.5h-4.25V15z" />
    </svg>
  );
}

export default Plus;
