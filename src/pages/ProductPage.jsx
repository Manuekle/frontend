/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate, useParams } from 'react-router-dom';

import Loader from '../assets/svg/loader';

import Tag from '../assets/svg/tag';
import Book from '../assets/svg/book';
import Plus from '../assets/svg/plus';
import Minus from '../assets/svg/minus';
import ShippingCar from '../assets/svg/shippingCar';
import Lock from '../assets/svg/lock';
import Star from '../assets/svg/star';

import Error from '../components/Error';

import { listProductDetails } from '../actions/productActions';

function ProductPage() {
  const [qty, setQty] = useState(1);

  const incremenateQty = () => {
    // setQty(qty + 1);
    // product.countInStock > qty ? setQty(qty + 1) : null;
    if (qty < product.countInStock) {
      setQty(qty + 1);
    }
  };
  const decrementQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const dispatch = useDispatch();

  const params = useParams();

  const navigate = useNavigate();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  const addToCartHandler = () => {
    // navigate(`/cart/${params.id}?qty=${qty}`)
    navigate(`/cart/${params.id}?qty=${qty}`);
  };

  useEffect(() => {
    dispatch(listProductDetails(params.id));
  }, [dispatch, params]);

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
        <section className="container mx-auto px-4 xl:px-24 my-8">
          <div className="grid grid-cols-2 gap-4 p-7 rounded-lg bg-light-200 dark:bg-dark-200">
            <div className="xl:col-span-1 col-span-2">
              <img
                src={product.image}
                alt={product.name}
                className="relative rounded-md w-[500px] h-[750px] object-cover shadow-md"
              />
            </div>
            <div className="xl:col-span-1 col-span-2 flex flex-col gap-4">
              <span className="flex flex-col gap-2">
                <h1 className="text-black dark:text-white lg:text-3xl text-lg font-bold tracking-widest uppercase">
                  {product.name} Vol. {product.volume}
                </h1>
                <span className="flex flex-row gap-2 items-center">
                  <Tag className="fill-black dark:fill-white" />
                  <h2 className="text-black dark:text-white uppercase text-sm font-bold tracking-wider">
                    {product.category}
                  </h2>
                </span>
                <span className="flex flex-row gap-2 items-center">
                  <Book className="fill-black dark:fill-white" />
                  <h2 className="text-black dark:text-white uppercase text-sm font-bold tracking-wider">
                    Editorial {product.editorial}
                  </h2>
                </span>
              </span>
              <span className="">
                <h1 className="text-black dark:text-white text-xl font-normal tracking-widest uppercase">
                  $ {product.price}
                </h1>
              </span>
              <span className="">
                <h1 className="text-black dark:text-white text-lg font-normal text-justify">
                  {product.description}
                </h1>
              </span>
              <span className="pb-2">
                <span className="flex items-center">
                  <h1 className="text-black dark:text-white text-sm font-bold capitalize">
                    Cantidad:
                  </h1>
                </span>
                <span className="flex flex-row pt-1 pb-1">
                  <button
                    onClick={decrementQty}
                    className="px-2 py-2 rounded-l-md border-2 border-light dark:border-zinc-200 p-4 border-r-0"
                  >
                    <span>
                      <Minus className="fill-black dark:fill-white" />
                    </span>
                  </button>
                  <button className="px-4 py-2 p-4 border-2 border-light dark:border-zinc-200 border-l-0 border-r-0">
                    <span className="text-black dark:text-white">{qty}</span>
                  </button>
                  <button
                    onClick={incremenateQty}
                    className="px-2 py-2 rounded-r-md border-2 border-light dark:border-zinc-200 p-4 border-l-0"
                  >
                    <span>
                      <Plus className="fill-black dark:fill-white" />
                    </span>
                  </button>
                </span>
              </span>
              <span className="gap-6 flex flex-col rounded-md py-4">
                <button
                  onClick={addToCartHandler}
                  className="py-4 px-8 bg-zinc-800 dark:bg-[#F0E9D2] rounded-md w-full hover:shadow-sm transform transition duration-500"
                >
                  <h1 className="text-sm font-bold text-zinc-100 dark:text-zinc-800 tracking-widest uppercase">
                    Comprar ahora
                  </h1>
                </button>
                <span className="flex xl:justify-between flex-col lg:flex-row lg:gap-0 gap-4">
                  <div className="flex flex-row gap-2 items-center">
                    <ShippingCar className="fill-black dark:fill-white" />
                    <h1 className="text-black dark:text-white text-sm font-bold tracking-wide capitalize">
                      Envíos a todo el país
                    </h1>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <Lock className="fill-black dark:fill-white" />
                    <h1 className="text-black dark:text-white text-sm font-bold tracking-wide capitalize">
                      Pago Seguro
                    </h1>
                  </div>
                  <div className="order-last flex flex-row gap-2 items-center ">
                    <Star className="fill-black dark:fill-white" />
                    <h1 className="text-black dark:text-white text-sm font-bold tracking-wide capitalize">
                      Producto Original
                    </h1>
                  </div>
                </span>
              </span>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ProductPage;
