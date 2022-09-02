/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect } from 'react';

import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from '../actions/cartActions';

import Loader from '../assets/svg/loader';
import ShippingCar from '../assets/svg/shippingCar';
import Empty from '../assets/svg/empty';

import Error from '../components/Error';

import CartProduct from '../components/CartProducts';

function CartPage() {
  const params = useParams();

  const location = useLocation();

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { loading, error, cartItems } = cart;
  // console.log(cartItems);

  useEffect(() => {
    if (params.id) {
      dispatch(addToCart(params.id, qty));
    }
  }, [dispatch, params.id, qty]);

  const checkoutHandler = () => {
    if (userInfo) {
      navigate('/shipping');
    } else {
      navigate('/account/login');
    }
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
              <h1 className="p-7 font-bold text-2xl text-black dark:text-white">
                Mi carrito de compras
              </h1>
              <hr className="border-zinc-200 dark:border-zinc-800 border-1 rounded-full" />
              <div className="p-7">
                {cartItems.length === 0 ? (
                  <section className="grid place-items-center h-auto xl:px-0 lg:px-0 md:px:0 px-4 py-4">
                    <span className="bg-black dark:bg-white p-4 rounded-full mb-4">
                      <Empty className="fill-white dark:fill-black" />
                    </span>
                    <span>
                      <h1 className="text-black dark:text-white text-2xl font-bold text-center">
                        No hay productos en el carrito
                      </h1>
                    </span>
                    <span>
                      <h1 className="text-black dark:text-white text-sm font-bold">
                        ¿No sabes qué comprar?
                      </h1>
                    </span>
                    <span>
                      <Link
                        to="/store"
                        className="text-black dark:text-white text-sm font-bold border-b-2 border-black dark:border-white"
                      >
                        Ir a la tienda!
                      </Link>
                    </span>
                  </section>
                ) : (
                  <div className="grid grid-cols-1 gap-6">
                    {cartItems.map((product) => (
                      <div className="col-span-1">
                        <CartProduct product={product} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <hr className="border-zinc-200 dark:border-zinc-800 border-1 rounded-full" />
              <span className="p-7 flex flex-row gap-2 items-center">
                <ShippingCar className="fill-black dark:fill-white" />
                <h1 className="font-bold text-md text-black dark:text-white">
                  Entrega en 1-2 semanas
                </h1>
              </span>
            </div>
            <div className="lg:h-[15em] h-auto lg:col-span-1 col-span-4 p-7 rounded-lg bg-light-200 dark:bg-dark-200">
              <div className="flex flex-col gap-2">
                <span>
                  <h1 className="font-bold text-xl text-black dark:text-white">
                    SUBTOTAL DE (
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}) MANGAS
                  </h1>
                </span>
                <hr className="border-zinc-200 dark:border-zinc-800 border-1 rounded-full" />
                <span>
                  <h1 className="font-semibold text-md capitalize text-black dark:text-white flex justify-between">
                    Total:
                    <span>
                      $
                      {cartItems
                        .reduce((acc, item) => acc + item.qty * item.price, 0)
                        .toFixed(2)}
                    </span>
                  </h1>
                </span>
                {cartItems.length === 0 ? (
                  <button
                    disabled
                    className="py-4 px-8 bg-zinc-100 dark:bg-zinc-800 rounded-md w-full mt-2"
                  >
                    <h1 className="text-sm font-bold text-black dark:text-white tracking-widest uppercase">
                      Comprar ahora
                    </h1>
                  </button>
                ) : (
                  <button
                    onClick={checkoutHandler}
                    className="py-4 px-8 bg-zinc-800 dark:bg-[#F0E9D2] rounded-md w-full mt-2"
                  >
                    <h1 className="text-sm font-bold text-white dark:text-black tracking-widest uppercase">
                      Comprar ahora
                    </h1>
                  </button>
                )}
                <span className="flex justify-center text-center pt-2">
                  <Link
                    to="/store"
                    className="text-zinc-800 dark:text-white text-sm font-bold border-b-2 border-zinc-500 hover:border-zinc-800 dark:border-white"
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

export default CartPage;
