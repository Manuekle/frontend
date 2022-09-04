/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useNavigate, useLocation } from 'react-router-dom';
import Add from '../assets/svg/add';

import Error from '../components/Error';
import PaginateInventory from '../components/PaginateInventory';

import Loader from '../assets/svg/loader';
import Edit from '../assets/svg/edit';
import Delete from '../assets/svg/delete';
import Empty from '../assets/svg/empty';

import {
  listProducts,
  deleteProduct,
  createProduct
} from '../actions/productActions';
import { PRODUCT_CREATE_RESET } from '../constants/productConstants';

function InventoryPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  const keyword = location.search;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  // console.log(products.length);

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct
  } = productCreate;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    // if (!userInfo.isAdmin) {
    //     navigate("/login");
    // }

    if (successCreate) {
      navigate(`product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProducts(keyword));
    }
  }, [
    dispatch,
    keyword,
    navigate,
    location,
    successDelete,
    successCreate,
    createdProduct
  ]);

  const createProductHandler = () => {
    dispatch(createProduct());
    // console.log("createProductHandler");
  };

  const deleteHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <>
      <section className="flex flex-row lg:flex-row justify-between mb-4">
        <h1 className="flex items-center text-black dark:text-white text-md lg:text-3xl font-bold uppercase tracking-widest pb-2 lg:pb-0">
          Productos de mi inventario
        </h1>
        <button
          type="button"
          onClick={createProductHandler}
          className="order-last justify-center flex flex-row gap-2 items-center bg-zinc-300 dark:bg-[#F0E9D2] rounded-md py-2 px-4"
        >
          <Add className="fill-white dark:fill-black" />
          <h1 className="text-white dark:text-black text-sm lg:text-md font-bold tracking-wide capitalize">
            Agregar producto
          </h1>
        </button>
      </section>
      <hr className="border-zinc-200 dark:border-zinc-800 border-1 rounded-full" />
      {loading ? (
        <div className="grid place-items-center h-96 pt-2">
          <Loader
            width="200px"
            height="200px"
            className="fill-black dark:fill-white"
          />
        </div>
      ) : error ? (
        <div className="grid place-items-center h-auto my-8">
          <Error />
        </div>
      ) : (
        <section className="grid grid-cols-2 gap-4 mt-4">
          {products.length === 0 && (
            <div className="col-span-2">
              <section className="grid place-items-center h-auto xl:px-0 lg:px-0 md:px:0 px-4 py-24">
                <span className="bg-black dark:bg-white p-4 rounded-full mb-4">
                  <Empty className="fill-white dark:fill-black" />
                </span>
                <span>
                  <h1 className="text-black dark:text-white text-2xl font-bold text-center">
                    No hay productos en tu inventario
                  </h1>
                </span>
                <span>
                  <button
                    onClick={createProductHandler}
                    className="text-black dark:text-white text-sm font-bold border-b-2 border-black dark:border-white"
                  >
                    Agregar producto!
                  </button>
                </span>
              </section>
            </div>
          )}
          {products.map((product) => (
            <div
              key={product}
              className="lg:col-span-1 col-span-2 py-2 px-2 border-2 rounded-md dark:border-zinc-700"
            >
              <div className="grid grid-cols-4">
                <div className="col-span-4 lg:col-span-3 flex flex-row items-center gap-4">
                  <Link to={`/product/${product._id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="relative rounded-md w-24 h-24 object-cover"
                    />
                  </Link>
                  <span className="flex flex-col gap-1">
                    <h1 className="text-black dark:text-white text-sm font-semibold tracking-wide uppercase">
                      {product.name}
                    </h1>
                    <h1 className="text-black dark:text-white text-xs font-semibold uppercase">
                      Editorial {product.editorial}
                    </h1>
                    <h1 className="text-black dark:text-white text-xs font-semibold uppercase">
                      {product.category}
                    </h1>
                    <h1 className="text-black dark:text-white text-xs font-semibold uppercase">
                      Stock: {product.countInStock}
                    </h1>
                  </span>
                </div>
                <div className="pt-2 lg:pt-0 col-span-4 lg:col-span-1 flex flex-row gap-1 items-center justify-start lg:justify-center">
                  <Link to={`product/${product._id}/edit`}>
                    {' '}
                    <Edit className="fill-[#62A388]" />
                  </Link>
                  <button onClick={() => deleteHandler(product._id)}>
                    {' '}
                    <Delete className="fill-[#C94E4E]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="col-span-2">
            {/* <PaginateInventory page={page} pages={pages} keyword={keyword} /> */}
          </div>
        </section>
      )}
    </>
  );
}

export default InventoryPage;
