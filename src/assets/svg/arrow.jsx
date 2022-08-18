/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Arrow(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
      <path d="M9 18l-6-6 6-6 1.4 1.4L6.8 11H21v2H6.8l3.6 3.6z" />
    </svg>
  );
}

export default Arrow;
