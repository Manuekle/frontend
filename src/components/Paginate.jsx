/* eslint-disable no-const-assign */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { listProducts } from '../actions/productActions';

// Components
import ProductPage from './ProductPage';

import Arrow from '../assets/svg/arrow';
import Card from './Card';

function Paginate({ itemsPerPage }) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  console.log(products);

  // const [currentItems, setCurrentItems] = useState(null);
  // const [pageCount, setPageCount] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);

  const items = [...Array(48).keys()];

  useEffect(() => {
    dispatch(listProducts());
    // const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    // setCurrentItems(products.slice(itemOffset, endOffset));
    // setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [dispatch]);

  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % products.length;
  //   setItemOffset(newOffset);
  // };
  return (
    <>
      <div className="col-span-12 lg:col-span-9 p-2 h-auto w-auto">
        <div className="relative grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 px-4 xl:px-0">
          <>
            {/* <ProductPage currentItems={currentItems} key={currentItems} /> */}
            {/* {currentItems &&
              currentItems.map((product) => (
                <Card product={product} key={product} />
              ))} */}
          </>
        </div>
        <div className="flex flex-row justify-center items-centered gap-4 pt-8 pb-6">
          {/* <ReactPaginate
            previousLabel={
              <button className="bg-light-200 dark:bg-dark-200 p-4 rounded-lg shadow-lg">
                <Arrow className="dark:fill-white fill-black" />
              </button>
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            nextLabel={
              <button className="bg-light-200 dark:bg-dark-200 p-4 rounded-lg shadow-lg">
                <Arrow
                  className="dark:fill-white fill-black"
                  style={{
                    transform: 'rotate(180deg)'
                  }}
                />
              </button>
            }
            containerClassName="flex flex-row justify-center items-center gap-4"
            pageClassName={
              <button className="flex flex-row items-center border"></button>
            }
            pageLinkClassName="bg-light-200 dark:bg-dark-200 p-4 rounded-lg shadow-lg"
            breakLabel="..."
            breakClassName="bg-light-200 dark:bg-dark-200 p-4 rounded-lg shadow-lg dark:text-white"
            breakLinkClassName=""
            activeClassName=""
            renderOnZeroPageCount={null}
          /> */}
        </div>
      </div>
    </>
  );
}

export default Paginate;
