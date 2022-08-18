/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Search(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-search"
      {...props}
    >
      <circle cx={11} cy={11} r={8} />
      <path d="M21 21L16.65 16.65" />
    </svg>
  );
}

export default Search;
