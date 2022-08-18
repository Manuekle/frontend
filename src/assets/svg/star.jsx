/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Star(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M7.333 14.896L10 13.312l2.688 1.584-.709-3 2.313-1.979-3.063-.271L10 6.792 8.771 9.646l-3.063.271 2.334 1.979zM5.062 18l1.313-5.542L2 8.729l5.75-.5L10 3l2.25 5.25 5.75.479-4.375 3.729L14.938 18 10 15.062zM10 11.062z" />
    </svg>
  );
}

export default Star;
