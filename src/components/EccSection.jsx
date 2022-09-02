/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/self-closing-comp */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import Loader from '../assets/svg/loader';

import ecc from '../assets/imgs/ecc.jpg';

function EccSection() {
  //   const ecc = '../assets/imgs/ecc.jpg';

  const dispatch = useDispatch();
  const location = useLocation();

  const keyword = location.search;
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  const productsFilter = products
    .filter((product) => product.editorial === 'ecc ediciones')
    .map((product) => {
      const date = new Date(product.createdAt);
      const dateString = date.toLocaleDateString();
      return { ...product, createdAt: dateString };
    })
    .reverse();

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);
  return (
    <>
      <section className="relative flex flex-col dark:bg-dark-200 rounded-lg shadow-md">
        <div className="bg-[#F47429] p-14 rounded-t-lg"></div>
        <div className="absolute right-9 top-10">
          <div className="bg-zinc-800 px-12 rounded-lg m-2 relative shadow-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80">
            <img src={ecc} alt="ecc" className="w-24 py-6" />
          </div>
        </div>
        <div className="pt-[2em]">
          <div className="grid grid-cols-3 gap-3 px-8 pt-6 pb-6">
            {loading ? (
              <div className="col-span-3 flex justify-center">
                <Loader
                  width="50px"
                  height="50px"
                  className="fill-black dark:fill-white"
                />
              </div>
            ) : (
              <>
                {productsFilter.slice(0, 3).map((product) => (
                  <>
                    <span>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="rounded-md object-cover h-24"
                      />
                    </span>
                  </>
                ))}
              </>
            )}
          </div>
          <div className="flex justify-center text-center pb-8">
            <h1 className="text-black dark:text-zinc-400 font-bold text-sm border-b hover:dark:border-zinc-200 border-zinc-400 hover:dark:text-zinc-200">
              Más detalles
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default EccSection;
