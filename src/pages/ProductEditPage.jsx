/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom';

import Add from '../assets/svg/add';
import Remove from '../assets/svg/remove';

import Error from '../components/Error';
import Loader from '../assets/svg/loader';

import CloudDone from '../assets/svg/cloudDone';
import CloudUpload from '../assets/svg/cloudUpload';

import { listProductDetails, updateProduct } from '../actions/productActions';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';

function ProductEditPage() {
  const [formData, setFormData] = useState(false);

  const [name, setName] = useState('');
  const [price, setPrice] = useState(1);
  const [image, setImage] = useState('');
  const [volume, setVolume] = useState(1);
  const [category, setCategory] = useState('');
  const [editorial, setEditorial] = useState('');
  const [countInStock, setCountInStock] = useState(1);
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const params = useParams();
  // console.log(params);

  const productDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = productDetails;

  // console.log(product);

  const [categories, setCategories] = useState([]);
  const [editorials, setEditorials] = useState([]);

  const getCategories = async () => {
    const res = await axios.get('/api/categories');
    setCategories(res.data);
  };

  const getEditorials = async () => {
    const res = await axios.get('/api/editorials');
    setEditorials(res.data);
  };

  // console.log(categories);

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    // error: errorUpdate,
    // loading: loadingUpdate,
    success: successUpdate
  } = productUpdate;

  const incremenateQty = () => {
    setCountInStock(countInStock + 1);
  };
  const decrementQty = () => {
    if (countInStock > 1) {
      setCountInStock(countInStock - 1);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFormData(true);
    dispatch(
      updateProduct({
        _id: params.id,
        name,
        price,
        image,
        volume,
        category,
        editorial,
        countInStock,
        description
      })
    );
    setTimeout(() => {
      setFormData(false);
    }, 1000);
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append('image', file);
    formData.append('product_id', params.id);

    setUploading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };

      const { data } = await axios.post(
        '/api/products/upload/',
        formData,
        config
      );

      setImage(data);
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      navigate('/dashboard/inventory');
    } else if (!product.name || product._id !== Number(params.id)) {
      dispatch(listProductDetails(params.id));
    } else {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setVolume(product.volume);
      setCategory(product.category);
      setEditorial(product.editorial);
      setCountInStock(product.countInStock);
      setDescription(product.description);
    }
    getCategories();
    getEditorials();
  }, [dispatch, navigate, product, params, successUpdate]);

  return (
    <>
      <section className="flex flex-col lg:flex-row justify-between mb-4">
        <h1 className="flex items-center text-black dark:text-white text-md lg:text-3xl font-bold uppercase tracking-widest pb-2 lg:pb-0">
          Editar producto
        </h1>
      </section>
      <hr className="border-zinc-200 dark:border-zinc-800 border-1 rounded-full" />
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
        <section className="p-4 mt-4 rounded-md">
          <div>
            <form onSubmit={submitHandler} className="grid grid-cols-3 gap-8">
              <div className="col-span-3 lg:col-span-1 flex flex-col gap-2">
                <label className="pl-1 text-black dark:text-white text-sm font-bold uppercase tracking-widest">
                  Nombre:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nombre del producto"
                  className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-800 dark:text-white bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-800 rounded-md py-3 pl-4 w-full"
                />
              </div>
              <div className="col-span-3 lg:col-span-1 flex flex-col gap-2">
                <label className="pl-1 text-black dark:text-white text-sm font-bold uppercase tracking-widest">
                  Categoria:
                </label>
                <select
                  className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-800 dark:text-white bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-800 rounded-md py-3 pl-4 w-full"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="" disabled>
                    Seleccione una categoria
                  </option>
                  {categories.map((category) => (
                    <option key={category._id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-3 lg:col-span-1 flex flex-col gap-2">
                <label className="pl-1 text-black dark:text-white text-sm font-bold uppercase tracking-widest">
                  Editorial:
                </label>
                <select
                  className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-800 dark:text-white bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-800 rounded-md py-3 pl-4 w-full"
                  value={editorial}
                  onChange={(e) => setEditorial(e.target.value)}
                >
                  <option value="" disabled>
                    Seleccione una categoria
                  </option>
                  {editorials.map((editorial) => (
                    <option key={editorial._id} value={editorial.name}>
                      {editorial.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-3 lg:col-span-1 flex flex-col gap-2">
                <label className="pl-1 text-black dark:text-white text-sm font-bold uppercase tracking-widest">
                  Volumen:
                </label>
                <input
                  type="number"
                  value={volume}
                  min="1"
                  max="100"
                  onChange={(e) => setVolume(e.target.value)}
                  placeholder="Nombre del producto"
                  className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-800 dark:text-white bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-800 rounded-md py-3 pl-4 w-full"
                />
              </div>
              <div className="col-span-3 lg:col-span-1 flex flex-col gap-2">
                <label className="pl-1 text-black dark:text-white text-sm font-bold uppercase tracking-widest">
                  Precio:
                </label>
                <input
                  min="1"
                  max="100"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  placeholder="Precio del producto"
                  className="font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-800 dark:text-white bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-800 rounded-md py-3 pl-4 w-full"
                />
                {price < 1 && (
                  <p className="text-red-500 text-xs italic">
                    El precio debe ser mayor a 0
                  </p>
                )}
              </div>
              <div className="col-span-3 lg:col-span-1 flex flex-col gap-2">
                <label className="pl-1 text-black dark:text-white text-sm font-bold uppercase tracking-widest">
                  Stock:
                </label>
                <span className="flex flex-row h-14 items-center pb-1">
                  <button
                    type="button"
                    onClick={decrementQty}
                    className="px-2 py-2 rounded-l-md p-4 border-2 border-zinc-300 dark:border-zinc-800"
                  >
                    <span>
                      <Remove className="fill-black dark:fill-white" />
                    </span>
                  </button>
                  <div className="px-4 py-2 p-4 border-2 border-zinc-300 dark:border-zinc-800 border-l-0 border-r-0">
                    <span className="text-black dark:text-white font-bold">
                      {countInStock}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={incremenateQty}
                    className="px-2 py-2 rounded-r-md p-4 border-2 border-zinc-300 dark:border-zinc-800"
                  >
                    <span>
                      <Add className="fill-black dark:fill-white" />
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
                      {uploading ? (
                        <Loader className="fill-black dark:fill-white" />
                      ) : (
                        <>
                          {image === 'Image was uploaded' ? (
                            <>
                              <CloudDone className="fill-zinc-400 group-hover:text-zinc-600" />
                              <p className="pt-1 text-sm tracking-wider text-zinc-400 group-hover:text-gray-600">
                                Imagen cargada
                              </p>
                            </>
                          ) : (
                            <>
                              <CloudUpload className="fill-zinc-400 group-hover:text-zinc-600" />
                              <p className="pt-1 text-sm tracking-wider text-zinc-400 group-hover:text-gray-600">
                                Subir Imagen
                              </p>
                            </>
                          )}
                        </>
                      )}
                    </div>
                    <input
                      onChange={uploadFileHandler}
                      type="file"
                      className="opacity-0"
                    />
                  </label>
                </div>
              </div>
              <div className="col-span-3 lg:col-span-2 flex flex-col gap-2">
                <label className="pl-1 text-black dark:text-white text-sm font-bold uppercase tracking-widest">
                  Descripción:
                </label>
                <textarea
                  style={{
                    resize: 'none'
                  }}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
            </form>
          </div>
        </section>
      )}
    </>
  );
}

export default ProductEditPage;
