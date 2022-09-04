/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prop-types */
import React from 'react';
import Card from './Card';

function ProductPage({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((product) => <Card product={product} />)}
    </>
  );
}

export default ProductPage;
