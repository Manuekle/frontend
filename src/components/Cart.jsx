/* eslint-disable no-console */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Icons
import Bag from '../assets/svg/bag';
import Close from '../assets/svg/close';

import CartModal from './CartModal';

function Cart(props) {
  const cart = useSelector((state) => state.cart);
  const { loading, error, cartItems } = cart;

  return (
    <div>
      <section className="absolute bg-white dark:bg-dark-200 top-0 right-0 flex justify-center h-full rounded-l-xl">
        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-56 p-5">
            <div className="col-span-1 flex justify-start gap-3 items-center">
              <span>
                <Bag className="fill-black dark:fill-white" />
              </span>
              <span>
                {/* <h1 className="text-md font-bold">0 Artículos</h1> */}
                {cartItems.length === 0 ? (
                  <h1 className="text-md font-bold text-black dark:text-white">
                    Carrito
                  </h1>
                ) : (
                  <h1 className="text-md font-bold text-black dark:text-white">
                    {cartItems.length} Artículos
                  </h1>
                )}
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
          {/* Empty */}
          {cartItems.length === 0 ? (
            <section className="mt-80 flex items-center justify-center">
              <div className="flex flex-col gap-8">
                <h1 className="text-center text-md font-normal text-black dark:text-white">
                  Su carrito está vacío
                </h1>
                <button className="py-4 px-8 bg-zinc-100 dark:bg-zinc-800 rounded-md">
                  <Link
                    to="/store"
                    className="text-sm font-bold text-black dark:text-white tracking-widest uppercase"
                  >
                    Empezar a Comprar
                  </Link>
                </button>
              </div>
            </section>
          ) : (
            <section className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {cartItems.map((product) => (
                  <>
                    <CartModal product={product} />
                  </>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </div>
  );
}

export default Cart;
