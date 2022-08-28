/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-array-index-key */
import React from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Slider() {
  const img =
    'https://www.thrustmaster.com/wp-content/uploads/2022/08/Promo-BackToSchool_1920x1080.jpg';

  return (
    <Splide
      options={{
        type: 'loop',
        perPage: 1,
        rewind: true,
        speed: 1000,
        autoplay: true,
        arrows: false,
        pagination: true,
        gap: '2px'
      }}
    >
      <SplideSlide>
        <img
          src={img}
          className="sm:h-96 h-36 w-full object-cover"
          alt="Image 1"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src={img}
          className="sm:h-96 h-36 w-full object-cover"
          alt="Image 3"
        />
      </SplideSlide>
      {/* <SplideSlide>
        <img src={img2} alt="Image 2" />
      </SplideSlide>
      <SplideSlide>
        <img src={img} alt="Image 3" />
      </SplideSlide> */}
    </Splide>
  );
}

export default Slider;
