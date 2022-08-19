/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { listProducts } from '../actions/productActions';

// import { Link } from "react-router-dom";
// Components
import Card from '../components/Card';
import Categories from '../components/Categories';
import Editorials from '../components/Editorials';
import Error from '../components/Error';

import Loader from '../assets/svg/loader';

import Plus from '../assets/svg/plus';
import Minus from '../assets/svg/minus';

function StoragePage() {
  const [openCategories, cycleOpenCategories] = useCycle(false, true);
  const [openEditorials, cycleOpenEditorials] = useCycle(false, true);

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
        <section className="container mx-auto py-4 my-20">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-10 lg:col-span-3 p-2 h-auto w-auto">
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
            <div className="col-span-10 lg:col-span-9 p-2 h-auto w-auto">
              <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 px-4 xl:px-0">
                {products.map((product) => (
                  <Card product={product} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default StoragePage;
