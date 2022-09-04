/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import ReactPaginate from 'react-paginate';
import { listProducts } from '../actions/productActions';

import Categories from '../components/Categories';
import Editorials from '../components/Editorials';
import Error from '../components/Error';
import Card from '../components/Card';

import Loader from '../assets/svg/loader';

import Plus from '../assets/svg/plus';
import Minus from '../assets/svg/minus';

import Arrow from '../assets/svg/arrow';

function StoragePage() {
  const dispatch = useDispatch();
  const [openCategories, cycleOpenCategories] = useCycle(false, true);
  const [openEditorials, cycleOpenEditorials] = useCycle(false, true);

  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  const itemsPerPage = 2;

  // const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  console.log(currentItems);

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
        <section className="relative container mx-auto py-4 my-20">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-3 p-2 h-auto w-auto">
              <AnimatePresence initial={false}>
                {/* categorías */}
                <div className="border-b-2 border-t-2 border-zinc-200 dark:border-zinc-800">
                  <section className="flex justify-between px-4 lg:px-0 py-4 ">
                    <div>
                      {' '}
                      <h1 className="text-black dark:text-white text-md font-bold tracking-widest uppercase">
                        categorías
                      </h1>
                    </div>
                    <div className="order-last ">
                      <button type="button" onClick={cycleOpenCategories}>
                        <motion.div layout>
                          <motion.div whileTap={{ rotate: 180 }}>
                            {openCategories ? (
                              <Minus className="dark:fill-white fill-black" />
                            ) : (
                              <Plus className="dark:fill-white fill-black" />
                            )}
                          </motion.div>
                        </motion.div>
                      </button>
                    </div>
                  </section>
                  {openCategories && (
                    <motion.div
                      key="categories"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: {
                          opacity: 0,
                          height: 'auto'
                        }
                      }}
                    >
                      <Categories />
                    </motion.div>
                  )}
                </div>
                {/* editoriales */}
                <div className="border-b-2 border-zinc-200 dark:border-zinc-800">
                  <section className="flex justify-between px-4 lg:px-0 py-4 ">
                    <div>
                      {' '}
                      <h1 className="text-black dark:text-white text-md font-bold tracking-widest uppercase">
                        Editoriales
                      </h1>
                    </div>
                    <div className="order-last ">
                      <button type="button" onClick={cycleOpenEditorials}>
                        <motion.div layout>
                          <motion.div whileTap={{ rotate: 180 }}>
                            {openEditorials ? (
                              <Minus className="dark:fill-white fill-black" />
                            ) : (
                              <Plus className="dark:fill-white fill-black" />
                            )}
                          </motion.div>
                        </motion.div>
                      </button>
                    </div>
                  </section>
                  {openEditorials && (
                    <motion.div
                      key="editorials"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: {
                          opacity: 0,
                          height: 'auto'
                        }
                      }}
                    >
                      <Editorials />
                    </motion.div>
                  )}
                </div>
              </AnimatePresence>
            </div>
            <>
              <div className="col-span-12 lg:col-span-9 p-2 h-auto w-auto">
                <div className="relative grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 px-4 xl:px-0">
                  {currentItems &&
                    currentItems.map((product) => (
                      <Card product={product} key={product.name} />
                    ))}
                </div>
                <div className="flex flex-row justify-center items-centered gap-4 pt-8 pb-6">
                  <ReactPaginate
                    previousLabel={
                      <button className="bg-light-200 dark:bg-dark-200 p-4 rounded-lg shadow-lg">
                        <Arrow className="dark:fill-white fill-black" />
                      </button>
                    }
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={1}
                    marginPagesDisplayed={1}
                    pageCount={pageCount}
                    nextLabel={
                      <button className="bg-light-200 dark:bg-dark-200 p-4 rounded-lg shadow-lg">
                        <Arrow
                          className="dark:fill-white fill-black"
                          style={{
                            transform: 'rotate(180deg)'
                          }}
                        />
                      </button>
                    }
                    containerClassName="flex flex-row justify-center items-center gap-4"
                    pageClassName={
                      <button className="flex flex-row items-center border"></button>
                    }
                    pageLinkClassName="bg-light-200 dark:bg-dark-200 p-4 rounded-lg shadow-lg"
                    breakLabel="..."
                    breakClassName="bg-light-200 dark:bg-dark-200 p-4 rounded-lg shadow-lg dark:text-white"
                    breakLinkClassName=""
                    activeClassName=""
                    renderOnZeroPageCount={null}
                  />
                </div>
              </div>
            </>
          </div>
          <div className="grid grid-cols-1 p-2 mt-10 px-44 gap-4">
            <span>
              <h1 className="text-zinc-100 font-bold text-xl">
                Las mejores colecciones de manga las encuentras
              </h1>
            </span>
            <span>
              <p className="text-zinc-100 font-bold text-xs">
                ¿Buscando un manga en especial? Aquí encontrarás una exclusiva
                colección de manga para que disfrutes de un buen rato de
                lectura.
              </p>
            </span>
            <span>
              <p className="text-zinc-100 font-bold text-xs">
                Sabemos que la magia de tener un manga en físico no se compara,
                por eso, compra aquí tu manga y te lo enviamos a la puerta de tu
                casa en Colombia.
              </p>
            </span>
            <br />
            <span>
              <h1 className="text-zinc-100 font-bold text-xl">
                ¿Por qué el manga se lee al revés?
              </h1>
            </span>
            <span>
              <p className="text-zinc-100 font-bold text-xs">
                Esto no es totalmente cierto, lo que sucede es que los mangas se
                leen en la dirección de la escritura en japonés: de derecha a
                izquierda y de arriba a abajo. Algo distinto a la forma de leer
                tradicional en Occidente.
              </p>
            </span>
          </div>
        </section>
      )}
    </>
  );
}

export default StoragePage;
