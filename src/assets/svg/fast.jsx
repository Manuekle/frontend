/* eslint-disable react/jsx-props-no-spreading */

import * as React from 'react';

function Fast(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
      <path d="M10.125 20.5l.925-6.625h-3.1q-.375 0-.45-.187-.075-.188.1-.513L12.95 3.5h.925l-.925 6.625h3.1q.35 0 .438.187.087.188-.088.513L11.05 20.5z" />
    </svg>
  );
}

export default Fast;
