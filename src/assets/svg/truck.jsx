/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Truck(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="white"
      width={180}
      height={180}
      {...props}
    >
      <path
        d="M494.34 299.07l-43.55-16.69-15.14-58.29A27.52 27.52 0 00409 203.5h-74v-15h27.5a22.5 22.5 0 000-45h-50A22.52 22.52 0 00290 166v137.5H7.5A7.5 7.5 0 000 311v80a7.5 7.5 0 007.5 7.5h48.6a47.5 47.5 0 0093.8 0h210.7a47.5 47.5 0 0093.8 0h50.1a7.5 7.5 0 007.5-7.5v-66.25a27.67 27.67 0 00-17.66-25.68zm-73.21-71.21l13.67 52.64H335v-62h74a12.51 12.51 0 0112.13 9.36zM305 166a7.5 7.5 0 017.5-7.5h50a7.5 7.5 0 010 15h-35a7.5 7.5 0 00-7.5 7.5v122.5h-15zM103 423.5a32.5 32.5 0 1132.5-32.5 32.54 32.54 0 01-32.5 32.5zm304.5 0A32.5 32.5 0 11440 391a32.54 32.54 0 01-32.5 32.5zm89.5-40h-42.6a47.5 47.5 0 00-93.8 0H149.9a47.5 47.5 0 00-93.8 0H15v-65h312.5a7.5 7.5 0 007.5-7.5v-15.5h108.11L489 313.08a12.58 12.58 0 018 11.67z"
        className="color011839 svgShape"
      />
      <path
        d="M103 381a7.5 7.5 0 00-7.5 7.5v5a7.5 7.5 0 0015 0v-5a7.5 7.5 0 00-7.5-7.5zm304.5 0a7.5 7.5 0 00-7.5 7.5v5a7.5 7.5 0 0015 0v-5a7.5 7.5 0 00-7.5-7.5zm67-37.5a7.5 7.5 0 00-7.5 7.5v10a7.5 7.5 0 0015 0v-10a7.5 7.5 0 00-7.5-7.5z"
        className="color011839 svgShape"
      />
      <path
        d="M135.79 167.74l17.13-8.35 16.16 8.28a7.38 7.38 0 003.42.83 7.52 7.52 0 005.5-2.39 7.77 7.77 0 002-5.33V73.5h-55v87.32a7.69 7.69 0 001.72 5 7.51 7.51 0 009.07 1.92zM272.5 73.5H195v40h85V81a7.5 7.5 0 00-7.5-7.5zm-162.5 0H32.5A7.5 7.5 0 0025 81v32.5h85z"
        className="color7738c8 svgShape"
      />
      <path
        d="M195 160.78A22.5 22.5 0 01162.23 181l-9.48-4.86-10.39 5.06A22.49 22.49 0 01110 160.82V128.5H41V271a7.5 7.5 0 007.5 7.5h210a7.5 7.5 0 007.5-7.5V128.5h-71zM63.5 224.93h31.43a7.5 7.5 0 010 15H63.5a7.5 7.5 0 010-15zm47.14 38.57H63.5a7.5 7.5 0 010-15h47.14a7.5 7.5 0 010 15z"
        className="color7738c8 svgShape"
      />
    </svg>
  );
}

export default Truck;