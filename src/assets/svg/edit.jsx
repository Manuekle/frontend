/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Edit(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M4.5 19.146q-.625 0-1.062-.438Q3 18.271 3 17.646v-11q0-.625.438-1.063.437-.437 1.062-.437h6.521l-1.5 1.5H4.5v11h11v-4.979l1.5-1.521v6.5q0 .625-.438 1.062-.437.438-1.062.438zm5.5-7zm3.625-6.813l1.083 1.084L9.5 11.583v1.063h1.062l5.188-5.167 1.042 1.063-5.604 5.604H8v-3.167zm3.167 3.209l-3.167-3.209 1.771-1.771q.437-.437 1.052-.437.614 0 1.052.437l1.083 1.084q.438.437.438 1.052 0 .614-.438 1.052z" />
    </svg>
  );
}

export default Edit;
