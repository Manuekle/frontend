/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import Slider from './Slider';

function Promotions() {
  return (
    <>
      <section className="grid grid-cols-3 gap-4">
        <div className="col-span-3">
          <Slider />
        </div>
      </section>
    </>
  );
}

export default Promotions;
