/* eslint-disable react/jsx-props-no-spreading */

import * as React from 'react';

function Image(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21zm0-2h14V5H5v14zm1-2h12l-3.75-5-3 4L9 13zm-1 2V5v14z" />
    </svg>
  );
}

export default Image;
