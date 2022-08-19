/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';

import StepsCheckout from '../components/StepsCheckout';
import { createOrder } from '../actions/orderActions';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';

import Loader from '../assets/svg/loader';

import Error from '../components/Error';

function PlaceOrderPage() {
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, order, error, success } = orderCreate;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  cart.itemsPrice = cart.cartItems
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);
  cart.shippingPrice = (cart.itemsPrice > 100 ? 0 : 2).toFixed(2);
  cart.taxPrice = Number(0.05 * cart.itemsPrice).toFixed(2);

  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  if (!cart.paymentMethod) {
    navigate('/payment');
  }

  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [success, navigate]);

  const placeOrder = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice
      })
    );
  };
  return (
    <>
      {loading ? (
        <div className="grid place-items-center h-96">
          <Loader
            width="200px"
            height="200px"
            className="fill-black dark:fill-white"
          />
        </div>
      ) : error ? (
        <div className="grid place-items-center h-auto my-8 lg:my-44">
          <Error />
        </div>
      ) : (
        <section className="container mx-auto px-4 xl:px-24 my-8 lg:mb-64 mb-8">
          <div className="grid grid-cols-4 gap-4">
            <div className="lg:col-span-3 col-span-4 rounded-lg bg-light-200 dark:bg-dark-200">
              <div className="pt-5">
                <StepsCheckout step1 step2 step3 step4 />
              </div>
              <div className="m-8 border-2 border-zinc-200 dark:border-zinc-800 p-8 xl:mb-28 xl:mt-8 mt-8 mb-12 rounded-lg">
                <h1 className="text-black dark:text-white text-3xl font-bold mb-2">
                  Dirección de envío
                </h1>
                <section className="pt-2 pb-4 flex flex-col gap-2">
                  <h1 className="font-bold text-sm text-black dark:text-white">
                    Dirección:{' '}
                    <span className="font-normal">
                      {cart.shippingAddress.address} ({' '}
                      {cart.shippingAddress.city} -{' '}
                      {cart.shippingAddress.country})
                    </span>
                  </h1>
                  <h1 className="font-bold text-sm text-black dark:text-white">
                    Teléfono:{' '}
                    <span className="font-normal">
                      {cart.shippingAddress.phone}
                    </span>
                  </h1>
                  <h1 className="font-bold text-sm text-black dark:text-white">
                    Mensaje:{' '}
                    <span className="font-normal">
                      {cart.shippingAddress.message}
                    </span>
                  </h1>
                </section>
                <hr className="border-zinc-200 dark:border-zinc-800 border-1 rounded-full" />
                <h1 className="text-black dark:text-white text-3xl font-bold mb-2 mt-6">
                  Método de pago
                </h1>
                <section className="pt-2 pb-4 flex flex-col gap-2">
                  <h1 className="font-bold text-sm text-black dark:text-white">
                    Método:{' '}
                    <span className="font-normal">{cart.paymentMethod}</span>
                  </h1>
                </section>
                <hr className="border-zinc-200 dark:border-zinc-800 border-1 rounded-full" />
                <h1 className="text-black dark:text-white text-3xl font-bold mb-2 mt-6">
                  Articulos
                </h1>
                {cart.cartItems.length === 0 ? <section /> : <section />}
                <hr className="border-zinc-200 dark:border-zinc-800 border-1 rounded-full" />
              </div>
            </div>
            <div className="lg:h-[270px] h-auto lg:col-span-1 col-span-4 p-7 rounded-lg bg-light-200 dark:bg-dark-200">
              <div className="flex flex-col gap-2">
                <span>
                  <h1 className="font-semibold text-md capitalize text-black dark:text-white flex justify-between">
                    Total Artículos:{' '}
                    <span className="text-[#343434] dark:text-[#EEEEEE]">
                      ${cart.itemsPrice}
                    </span>
                  </h1>
                  <h1 className="font-semibold text-md capitalize text-black dark:text-white flex justify-between">
                    Gastos de envío:{' '}
                    <span className="text-url-100">
                      + ${cart.shippingPrice}
                    </span>
                  </h1>
                  <h1 className="font-semibold text-md capitalize text-black dark:text-white flex justify-between">
                    TAX:{' '}
                    <span className="text-url-100">+ ${cart.taxPrice}</span>
                  </h1>
                </span>
                <hr className="border-zinc-200 dark:border-zinc-800 border-1 rounded-full" />
                <span>
                  <h1 className="font-semibold text-md capitalize text-black dark:text-white flex justify-between">
                    Total:{' '}
                    <span className="text-url-200">${cart.totalPrice}</span>
                  </h1>
                </span>
                <button className="py-4 px-8 bg-zinc-100 dark:bg-zinc-800 rounded-md w-full mt-2">
                  <h1 className="text-sm font-bold text-black dark:text-white tracking-widest uppercase">
                    Realizar Pedido
                  </h1>
                </button>
                <span className="flex justify-center text-center">
                  <Link
                    to="/store"
                    className="text-black dark:text-white text-sm font-bold border-b-2 border-black dark:border-white"
                  >
                    Seguir Comprando
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default PlaceOrderPage;
