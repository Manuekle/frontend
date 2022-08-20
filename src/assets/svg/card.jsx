/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Card(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M18 5.5v9q0 .604-.438 1.052Q17.125 16 16.5 16h-13q-.604 0-1.052-.448Q2 15.104 2 14.5v-9q0-.604.448-1.052Q2.896 4 3.5 4h13q.625 0 1.062.448Q18 4.896 18 5.5zM3.5 7h13V5.5h-13zm0 3v4.5h13V10zm0 4.5v-9 9z" />
    </svg>
  );
}

export default Card;
