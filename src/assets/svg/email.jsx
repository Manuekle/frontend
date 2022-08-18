/* eslint-disable react/jsx-props-no-spreading */

import * as React from 'react';

function Email(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z" />
    </svg>
  );
}

export default Email;
