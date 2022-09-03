/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

// Icons
import Fast from '../assets/svg/fast';
import Close from '../assets/svg/close';
import Plus from '../assets/svg/plus';
import Minus from '../assets/svg/minus';

import Message from './Message';

import { addToCart } from '../actions/cartActions';

function Product(props) {
  const [show, setShow] = useState(false);
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const incremenateQty = () => {
    if (qty < props.product.countInStock) {
      setQty(qty + 1);
    }
  };
  const decrementQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };
  const price = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(props.product.price);

  const goToCart = () => {
    navigate(`/cart/${props.product._id}?qty=${qty}`);
  };

  const addToCartHandler = () => {
    // navigate(`/cart/${params.id}?qty=${qty}`)
    // navigate(`/cart/${params.id}?qty=${qty}`);
    dispatch(addToCart(props.product._id, qty));
  };
  const handleShow = () => {
    addToCartHandler();
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  return (
    <section className="absolute bg-white dark:bg-dark-200 top-0 right-0 flex justify-center h-full rounded-l-xl">
      <div className="flex flex-col">
        <div className="grid grid-cols-2 gap-56 p-5">
          <div className="col-span-1 flex justify-start gap-3 items-center">
            <span>
              <Fast className="fill-black dark:fill-white" />
            </span>
            <span>
              {/* <h1 className="text-md font-bold">0 Artículos</h1> */}
              <h1 className="text-md font-bold text-black dark:text-white">
                Vista rápida
              </h1>
            </span>
          </div>
          <div className="col-span-1 flex justify-end items-center pt-2">
            <span>
              <button
                type="button"
                className="relative"
                onClick={props.onClick}
              >
                <Close className="fill-black dark:fill-white" />
              </button>
            </span>
          </div>
        </div>
        <hr className="border-zinc-200 dark:border-zinc-800 border-1 rounded-full" />
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ y: '-5vh', opacity: 1 }}
              animate={{ y: '0vh' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="top-0 left-0 right-0 bottom-0"
            >
              <>
                <Message />
              </>
            </motion.div>
          )}
        </AnimatePresence>

        <section className="grid grid-cols-3 p-8 gap-4">
          <div className="col-span-1 flex flex-row gap-8">
            <section className="w-auto h-auto">
              <div className=" shadow-lg">
                <img
                  src={props.product.image}
                  alt=""
                  className="w-28 h-auto rounded-lg"
                />
              </div>
            </section>
          </div>
          <div className="col-span-2 flex flex-col gap-1">
            <div className="grid grid-cols-2 gap-10">
              <div className="col-span-2">
                <span className="flex items-center">
                  <h1 className="pb-3 text-black dark:text-white text-sm font-bold uppercase tracking-widest w-80">
                    {props.product.name} Vol. {props.product.volume}
                  </h1>
                </span>
                <span className="flex items-center">
                  <h1 className="text-black dark:text-white text-sm font-bold capitalize">
                    Editorial {props.product.editorial}
                  </h1>
                </span>
                <span className="flex items-center">
                  <h1 className="text-black dark:text-white text-sm font-bold capitalize">
                    {props.product.category}
                  </h1>
                </span>
                <span className="flex items-center">
                  <h1 className="text-black dark:text-white text-sm font-normal capitalize">
                    {price.substring(0, price.length - 3)}
                  </h1>
                </span>
                <div className="pt-4">
                  <span className="flex items-center">
                    <h1 className="text-black dark:text-white text-sm font-normal capitalize">
                      Cantidad:
                    </h1>
                  </span>
                  <span className="flex flex-row pt-1 pb-2 h-14">
                    <button
                      onClick={decrementQty}
                      className="px-2 py-2 rounded-l-md border border-light dark:border-zinc-600 p-4 border-r-0"
                    >
                      <span>
                        <Minus className="fill-black dark:fill-white" />
                      </span>
                    </button>
                    <button className="px-4 py-2 p-4 border border-light dark:border-zinc-600 border-l-0 border-r-0">
                      <span className="text-black dark:text-white text-sm">
                        {qty}
                      </span>
                    </button>
                    <button
                      onClick={incremenateQty}
                      className="px-2 py-2 rounded-r-md border border-light dark:border-zinc-600 p-4 border-l-0"
                    >
                      <span>
                        <Plus className="fill-black dark:fill-white" />
                      </span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <span>
              <p className="text-black dark:text-white w-[30em] text-justify">
                {/* {props.product.description.substring(0, 400)} */}
                {props.product.description.substring(0, 450)}...
              </p>
            </span>
          </div>
          <div className="mt-20 flex col-span-3 justify-center">
            <button
              type="button"
              onClick={handleShow}
              className="py-4 px-8 bg-white hover:bg-zinc-200 rounded-md w-full"
            >
              <h1 className="text-sm font-bold text-black tracking-widest uppercase">
                Añadir a la cesta
              </h1>
            </button>
          </div>
          <div className="col-span-3">
            <button
              onClick={goToCart}
              className="py-4 px-8 bg-zinc-100 dark:bg-zinc-800 rounded-md w-full"
            >
              <h1 className="text-sm font-bold dark:text-white text-black tracking-widest uppercase">
                Comprar ahora
              </h1>
            </button>
          </div>
          <div className="flex col-span-3 justify-center">
            <Link to={`/product/${props.product._id}`}>
              <h2 className="text-xs font-bold border-b dark:text-zinc-300 dark:hover:text-zinc-200 dark:hover:border-b-zinc-200 dark:border-b-zinc-300 text-black hover:text-zinc-600 hover:border-b-zinc-600 border-b-black">
                Ver detalles
              </h2>
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Product;
