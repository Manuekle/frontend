/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function UserSettings(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
      <path d="M10 12q-1.65 0-2.825-1.175Q6 9.65 6 8q0-1.65 1.175-2.825Q8.35 4 10 4q1.65 0 2.825 1.175Q14 6.35 14 8q0 1.65-1.175 2.825Q11.65 12 10 12zm-8 8v-2.8q0-.825.425-1.55.425-.725 1.175-1.1 1.275-.65 2.875-1.1Q8.075 13 10 13h.35q.15 0 .3.05-.2.45-.338.938-.137.487-.212 1.012H10q-1.775 0-3.188.45-1.412.45-2.312.9-.225.125-.362.35-.138.225-.138.5v.8h6.3q.15.525.4 1.038.25.512.55.962zm14 1l-.3-1.5q-.3-.125-.563-.262-.262-.138-.537-.338l-1.45.45-1-1.7 1.15-1q-.05-.35-.05-.65 0-.3.05-.65l-1.15-1 1-1.7 1.45.45q.275-.2.537-.338.263-.137.563-.262L16 11h2l.3 1.5q.3.125.563.275.262.15.537.375l1.45-.5 1 1.75-1.15 1q.05.3.05.625t-.05.625l1.15 1-1 1.7-1.45-.45q-.275.2-.537.338-.263.137-.563.262L18 21zm1-3q.825 0 1.413-.587Q19 16.825 19 16q0-.825-.587-1.413Q17.825 14 17 14q-.825 0-1.412.587Q15 15.175 15 16q0 .825.588 1.413Q16.175 18 17 18zm-7-8q.825 0 1.413-.588Q12 8.825 12 8t-.587-1.412Q10.825 6 10 6q-.825 0-1.412.588Q8 7.175 8 8t.588 1.412Q9.175 10 10 10zm0-2zm.3 10z" />
    </svg>
  );
}

export default UserSettings;
