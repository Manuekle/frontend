/* eslint-disable no-shadow */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-case-declarations */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cart from '../assets/svg/cart';
import Product from './Product';

function Card(props) {
  const { product } = props;

  const [name, setName] = useState(product.name.toLowerCase());

  const [openProduct, cycleOpenProduct] = useCycle(false, true);

  const price = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(product.price);

  const openProductHandler = () => {
    cycleOpenProduct();
  };

  return (
    <>
      <section>
        {/* bg-opacity-60 backdrop-filter backdrop-blur-lg */}
        <div className="relative rounded-md bg-light-200 dark:bg-dark-200 p-2 shadow-sm">
          <section className="relative py-4 px-12">
            <Link to={`/product/${product._id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg w-full h-56 object-cover relative shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              />
            </Link>
            {/* <div className="absolute top-2 right-2 flex">
              {product.countInStock > 0 ? (
                <span className="bg-black px-2 py-2 bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg">
                  <h1 className="tracking-widest uppercase text-white text-xs">
                    Disponible
                  </h1>
                </span>
              ) : (
                <span className="bg-black px-2 py-2 bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg">
                  <h1 className="tracking-widest uppercase text-white text-xs">
                    Agotado
                  </h1>
                </span>
              )}
            </div> */}
          </section>
          <section className="px-12 flex flex-col">
            <h1 className="text-zinc-500 dark:text-zinc-400 text-xs font-bold capitalize">
              Editorial {product.editorial}
            </h1>
            <h1 className="text-zinc-700 dark:text-zinc-100 text-sm font-bold capitalize">
              {name.length > 15
                ? `${
                    name.charAt(0).toUpperCase() +
                    name.slice(1).substring(0, 15)
                  }...`
                : `${name.charAt(0).toUpperCase() + name.slice(1)} Vol. ${
                    product.volume
                  }`}
            </h1>
          </section>
          <section className="grid grid-cols-2 px-12 pt-3 pb-4">
            <div className="col-span-1 flex items-center justify-start ">
              <h1 className="text-zinc-700 dark:text-zinc-100 text-sm font-bold capitalize">
                {price.substring(0, price.length - 3)}
              </h1>
            </div>
            <div className="col-span-1 flex items-center justify-end">
              <button type="button" onClick={openProductHandler}>
                <span>
                  <Cart className="fill-zinc-500 dark:fill-zinc-400 hover:fill-zinc-800 dark:hover:fill-zinc-100" />
                </span>
              </button>
            </div>
          </section>
        </div>
      </section>
      <AnimatePresence>
        {openProduct && (
          <motion.div
            initial={{ x: '100vh', opacity: 1, zIndex: 1 }}
            animate={{ x: '0vh' }}
            exit={{ x: '100vh', opacity: 1, zIndex: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 bottom-0"
          >
            <>
              <Product onClick={cycleOpenProduct} product={product} />
            </>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Card;
