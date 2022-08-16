import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Add from "../assets/svg/add";

import { Link, useNavigate, useLocation } from "react-router-dom";

import Error from "../components/Error";

import Loader from "../assets/svg/loader";
import Edit from "../assets/svg/edit";
import Delete from "../assets/svg/delete";
import Empty from "../assets/svg/empty";

import {
  listProducts,
  deleteProduct,
  createProduct,
} from "../actions/productActions";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants";

function InventoryPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    // if (!userInfo.isAdmin) {
    //     navigate("/login");
    // }

    if (successCreate) {
      navigate(`product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProducts(location.search));
    }
  }, [
    dispatch,
    // history,
    // userInfo,\
    navigate,
    location,
    successDelete,
    successCreate,
    createdProduct,
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
      <section className="flex flex-col lg:flex-row justify-between mb-4">
        <h1 className="flex items-center text-black dark:text-white text-md lg:text-3xl font-bold uppercase tracking-widest pb-2 lg:pb-0">
          Productos de mi inventario
        </h1>
        <button
          type="button"
          onClick={createProductHandler}
          className="order-last flex flex-row gap-2 items-center bg-black dark:bg-white rounded-md py-2 px-4 w-56 lg:w-56"
        >
          <Add className="fill-white dark:fill-black" />
          <h1 className="text-white dark:text-black text-sm lg:text-md font-bold tracking-wide capitalize">
            Agregar producto
          </h1>
        </button>
      </section>
      <hr />
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
        <>
          <section className="grid grid-cols-2 gap-4 mt-4">
            {products.map((product) => (
              <>
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
                <div className="lg:col-span-1 col-span-2 py-2 ">
                  <div className="grid grid-cols-4">
                    <div className="col-span-4 lg:col-span-3 flex flex-row items-center gap-4">
                      <Link to={`/product/${product._id}`}>
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
                          Editorial {product.editorial}
                        </h1>
                        <h1 className="text-black dark:text-white text-xs font-semibold uppercase">
                          Stock: {product.countInStock}
                        </h1>
                      </span>
                    </div>
                    <div className="pt-2 lg:pt-0 col-span-4 lg:col-span-1 flex flex-row gap-1 items-center justify-start lg:justify-center">
                      <Link to={`product/${product._id}/edit`}>
                        {" "}
                        <Edit className="fill-black dark:fill-white" />
                      </Link>
                      <button onClick={() => deleteHandler(product._id)}>
                        {" "}
                        <Delete className="fill-black dark:fill-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </section>
        </>
      )}
    </>
  );
}

export default InventoryPage;
