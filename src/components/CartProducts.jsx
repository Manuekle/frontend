/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Remove from '../assets/svg/remove';
import Add from '../assets/svg/add';
import Delete from '../assets/svg/delete';

import { addToCart, removeFromCart } from '../actions/cartActions';

function CartProduct(props) {
  const { product } = props;
  const [qty, setQty] = useState(product.qty);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const incremenateQty = () => {
    if (qty < product.countInStock) {
      setQty(qty + 1);
    }
  };
  const decrementQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  useEffect(() => {
    dispatch(addToCart(product.product, qty));
  }, [dispatch, qty, product.product]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  //   const checkoutHandler = () => {
  //     navigate("/login?redirect=shipping");
  //   };

  return (
    <div className="grid grid-cols-8 gap-4">
      <div className="lg:col-span-4 col-span-8 flex flex-row items-center gap-4">
        <Link to={`/product/${product.product}`}>
          <img
            src={product.image}
            alt={product.name}
            className="relative rounded-md w-[70px] h-full border-2 border-black dark:border-white"
          />
        </Link>
        <span className="flex flex-col gap-1">
          <h1 className="text-black dark:text-white text-sm font-semibold tracking-wide uppercase">
            {product.name}
          </h1>
          <h1 className="text-black dark:text-white text-xs font-semibold uppercase">
            {product.category}
          </h1>
          <h1 className="text-black dark:text-white text-xs font-semibold uppercase">
            $ {product.price}
          </h1>
        </span>
      </div>
      <div className="lg:col-span-2 col-span-4 p-2 flex flex-row gap-2 items-center">
        <span className="flex flex-row pt-1 pb-1 h-14 items-center">
          <button
            onClick={decrementQty}
            //   onChange={() => dispatch(addToCart(product.product, qty))}
            className="px-2 py-2 rounded-l-md border-r-1 p-4 border-2 border-zinc-300 dark:border-zinc-800"
          >
            <span>
              <Remove className="fill-black dark:fill-white" />
            </span>
          </button>
          <button className="px-4 py-2 p-4 border-2 border-zinc-300 dark:border-zinc-800 border-l-0 border-r-0">
            <span className="text-black dark:text-white">{qty}</span>
          </button>
          <button
            onClick={incremenateQty}
            //   onChange={() => dispatch(addToCart(product.product, qty))}
            className="px-2 py-2 rounded-r-md p-4 border-2 border-zinc-300 dark:border-zinc-800"
          >
            <span>
              <Add className="fill-black dark:fill-white" />
            </span>
          </button>
        </span>
        <button onClick={() => removeFromCartHandler(product.product)}>
          <Delete className="fill-black dark:fill-white" />
        </button>
      </div>
      <div className="col-span-4 lg:col-span-2 p-2 flex items-center justify-end">
        <h1 className="text-black dark:text-white text-sm font-semibold tracking-wide ">
          Total: ${(product.qty * product.price).toFixed(2)}
        </h1>
      </div>
    </div>
  );
}
export default CartProduct;
