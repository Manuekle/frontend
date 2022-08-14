import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listProducts } from "../actions/productActions";

import Card from "../components/Card";

import Loader from "../assets/svg/loader";

function StoragePage() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className="grid place-items-center h-96">
          <Loader width="200px" height="200px" className="fill-black dark:fill-white" />
        </div>
      ) : error ? (
        <div className="grid place-items-center h-96">Error de conexion</div>
      ) : (
        <section className="container mx-auto border-t-2 py-4 my-20">
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-6 lg:col-span-2 p-2 h-auto w-auto"></div>
            <div className="col-span-6 lg:col-span-4 p-2 h-auto w-auto">
              {products.map((product) => (
                <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 px-4 xl:px-0">
                  <Card product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default StoragePage;
