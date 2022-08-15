import * as React from "react";

function Book(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M5.5 18q-.625 0-1.062-.438Q4 17.125 4 16.5v-13q0-.625.438-1.062Q4.875 2 5.5 2h9q.625 0 1.062.438Q16 2.875 16 3.5v13q0 .625-.438 1.062Q15.125 18 14.5 18zm0-1.5h9v-13H13V10l-2-1-2 1V3.5H5.5v13zm0 0v-13 13zM9 10l2-1 2 1-2-1-2 1z" />
    </svg>
  );
}

export default Book;
