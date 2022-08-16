import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";

import Add from "../assets/svg/add";
import Remove from "../assets/svg/remove";

import Error from "../components/Error";
import Loader from "../assets/svg/loader";

import { Formik, Form, Field, ErrorMessage } from "formik";

import {
  listCategories,
  listProductDetails,
  updateProduct,
} from "../actions/productActions";
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants";

function ProductEditPage() {
  const [formData, setFormData] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [editorial, setEditorial] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const params = useParams();

  const productDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = productDetails;

  // console.log(product);

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = productUpdate;

  const incremenateQty = () => {
    setCountInStock(countInStock + 1);
  };
  const decrementQty = () => {
    if (countInStock > 1) {
      setCountInStock(countInStock - 1);
    }
  };

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      navigate("/dashboard/inventory");
    } else {
      if (!product.name || product._id !== Number(params.id)) {
        dispatch(listProductDetails(params.id));
      } else {
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setBrand(product.brand);
        setCategory(product.category);
        setEditorial(product.editorial);
        setCountInStock(product.countInStock);
        setDescription(product.description);
      }
    }
  }, [dispatch, navigate, product, params.id, successUpdate]);

  return (
    <>
      <section className="flex flex-col lg:flex-row justify-between mb-4">
        <h1 className="flex items-center text-black dark:text-white text-md lg:text-3xl font-bold uppercase tracking-widest pb-2 lg:pb-0">
          Editar producto
        </h1>
      </section>
      <hr />
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
        <section className="border-2 border-black dark:border-white p-4 mt-4 rounded-md">
          <div>
            <Formik
              initialValues={{
                _id: params.id,
                name: product.name,
                price: product.price,
                image: product.image,
                brand: product.brand,
                category: product.category,
                editorial: product.editorial,
                countInStock: product.countInStock,
                description: product.description,
              }}
              validate={(res) => {
                let error = {};

                if (!res.name) {
                  error.name = "El nombre es requerido";
                }

                if (!res.price) {
                  error.price = "El precio es requerido";
                } else if (!/^[0-9]+(\.[0-9]{1,2})?$/.test(res.price)) {
                  error.price =
                    "El precio debe ser un numero con dos decimales";
                } else if (res.price < 0) {
                  error.price = "El precio no puede ser negativo";
                }

                if (!res.image) {
                  error.image = "La imagen es requerida";
                }
                if (!res.brand) {
                  error.brand = "La marca es requerida";
                }
                if (!res.category) {
                  error.category = "La categoria es requerida";
                }
                if (!res.editorial) {
                  error.editorial = "La editorial es requerida";
                }
                if (!res.countInStock) {
                  error.countInStock = "La cantidad es requerida";
                } else if (res.countInStock < 0) {
                  error.countInStock = "La cantidad no puede ser negativa";
                }
                if (!res.description) {
                  error.description = "La descripcion es requerida";
                }

                return error;
              }}
              onSubmit={(res, { resetForm }) => {
                resetForm();
                setFormData(true);
                dispatch(updateProduct({
                  ...res,
                }
                ));
                setTimeout(() => {
                  setFormData(false);
                }, 1000);
                return console.log(res);
              }}
            >
              {({ errors }) => (
                <Form className="grid grid-cols-3 gap-8">
                  <div className="col-span-3 lg:col-span-1 flex flex-col gap-2">
                    <label className="pl-1 text-black dark:text-white text-sm font-bold uppercase tracking-widest">
                      Nombre:
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Nombre del producto"
                      className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-800 dark:text-white bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-800 rounded-md py-3 pl-4 w-full"
                    />
                    <ErrorMessage
                      name="name"
                      component={() => (
                        <div className="text-red-500 text-xs pl-1 pt-2 font-bold">
                          {errors.name}
                        </div>
                      )}
                    />
                  </div>
                  <div className="col-span-3 lg:col-span-1 flex flex-col gap-2">
                    <label className="pl-1 text-black dark:text-white text-sm font-bold uppercase tracking-widest">
                      Categoria:
                    </label>
                    <Field
                      type="text"
                      name="category"
                      id="category"
                      placeholder="Categoria"
                      className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-800 dark:text-white bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-800 rounded-md py-3 pl-4 w-full"
                    />
                  </div>
                  <div className="col-span-3 lg:col-span-1 flex flex-col gap-2">
                    <label className="pl-1 text-black dark:text-white text-sm font-bold uppercase tracking-widest">
                      Editorial:
                    </label>
                    <Field
                      name="editorial"
                      id="editorial"
                      type="text"
                      placeholder="Editorial"
                      className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-800 dark:text-white bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-800 rounded-md py-3 pl-4 w-full"
                    />
                  </div>
                  <div className="col-span-3 lg:col-span-1 flex flex-col gap-2">
                    <label className="pl-1 text-black dark:text-white text-sm font-bold uppercase tracking-widest">
                      Volumen:
                    </label>
                    <Field
                      type="text"
                      name="brand"
                      id="brand"
                      placeholder="Nombre del producto"
                      className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-800 dark:text-white bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-800 rounded-md py-3 pl-4 w-full"
                    />
                  </div>
                  <div className="col-span-3 lg:col-span-1 flex flex-col gap-2">
                    <label className="pl-1 text-black dark:text-white text-sm font-bold uppercase tracking-widest">
                      Precio:
                    </label>
                    <Field
                      min="0"
                      max="100"
                      name="price"
                      id="price"
                      type="number"
                      placeholder="Precio del producto"
                      className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-800 dark:text-white bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-800 rounded-md py-3 pl-4 w-full"
                    />
                  </div>
                  <div className="col-span-3 lg:col-span-1 flex flex-col gap-2">
                    <label className="pl-1 text-black dark:text-white text-sm font-bold uppercase tracking-widest">
                      Stock:
                    </label>
                    <span className="flex flex-row h-14 items-center pb-1">
                      <button                        
                        onClick={decrementQty}
                        className="px-2 py-2 rounded-l-sm border-r-1 border-zinc-400 dark:border-zinc-800 p-4 border-2"
                      >
                        <span>
                          <Remove className="fill-zinc-400 dark:fill-zinc-800" />
                        </span>
                      </button>
                      <button className="px-4 py-2 border-l-0 border-r-0 border-zinc-400 dark:border-zinc-800 p-4 border-2">
                        <span className="text-zinc-600 dark:text-zinc-500 font-bold">
                          {countInStock}
                        </span>
                      </button>
                      <button                        
                        onClick={incremenateQty}
                        className="px-2 py-2 rounded-r-sm border-l-1 border-zinc-400 dark:border-zinc-800 p-4 border-2"
                      >
                        <span>
                          <Add className="fill-zinc-400 dark:fill-zinc-800" />
                        </span>
                      </button>
                    </span>
                  </div>
                  <div className="col-span-3 lg:col-span-1 flex flex-col">
                    <div className="pb-2 pl-1 flex flex-row items-center gap-1">
                      <label className=" text-black dark:text-white text-sm font-bold uppercase tracking-widest">
                        Imagen
                      </label>
                      <span className="text-xs font-bold text-zinc-400">
                        (Max 10Mb)
                      </span>
                    </div>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col w-full h-32 border-4 border-zinc-200 dark:border-zinc-800 border-dashed hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:border-zinc-300">
                        <div className="flex flex-col items-center justify-center pt-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-zinc-400 group-hover:text-zinc-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                          <p className="pt-1 text-sm tracking-wider text-zinc-400 group-hover:text-gray-600">
                            Subir Imagen
                          </p>
                        </div>
                        <input type="file" className="opacity-0" />
                      </label>
                    </div>
                  </div>
                  <div className="col-span-3 lg:col-span-2 flex flex-col gap-2">
                    <label className="pl-1 text-black dark:text-white text-sm font-bold uppercase tracking-widest">
                      Descripción:
                    </label>
                    <Field
                      style={{
                        resize: "none",
                      }}
                      as="textarea"
                      name="description"
                      id="description"
                      placeholder="Descripción del producto"
                      rows="4"
                      className="decorate-none font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-800 dark:text-white bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-800 rounded-md py-3 pl-4 w-full"
                    />
                  </div>
                  <span className="col-span-3 pt-2 flex justify-center">
                    <button
                      type="submit"
                      className="bg-black dark:bg-white w-full rounded-lg"
                    >
                      {!formData && (
                        <h1 className="text-white dark:text-black text-md font-bold py-4">
                          Actualizar Producto
                        </h1>
                      )}
                      {formData && (
                        <Loader className="fill-white dark:fill-black" />
                      )}
                    </button>
                  </span>
                </Form>
              )}
            </Formik>
          </div>
        </section>
      )}
    </>
  );
}

export default ProductEditPage;
