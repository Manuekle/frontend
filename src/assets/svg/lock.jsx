/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Lock(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M5.5 18q-.625 0-1.062-.438Q4 17.125 4 16.5v-8q0-.625.438-1.062Q4.875 7 5.5 7H6V5q0-1.667 1.167-2.833Q8.333 1 10 1q1.667 0 2.833 1.167Q14 3.333 14 5v2h.5q.625 0 1.062.438Q16 7.875 16 8.5v8q0 .625-.438 1.062Q15.125 18 14.5 18zm0-1.5h9v-8h-9v8zM10 14q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q10.625 11 10 11t-1.062.438Q8.5 11.875 8.5 12.5t.438 1.062Q9.375 14 10 14zM7.5 7h5V5q0-1.042-.729-1.771Q11.042 2.5 10 2.5q-1.042 0-1.771.729Q7.5 3.958 7.5 5zm-2 9.5v-8 8z" />
    </svg>
  );
}

export default Lock;
