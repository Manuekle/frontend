import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listProducts } from "../actions/productActions";

// import { Link } from "react-router-dom";
// Components
import Card from "../components/Card";
import Categories from "../components/Categories";
import Editorials from "../components/Editorials";
import Error from "../components/Error";

import Loader from "../assets/svg/loader";

import Add from "../assets/svg/add";
import Remove from "../assets/svg/remove";

import { AnimatePresence, motion, useCycle } from "framer-motion";

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
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-6 lg:col-span-2 p-2 h-auto w-auto">
              <AnimatePresence initial={false}>
                {/* categorías */}
                <div className="border-b-2 border-t-2 border-black dark:border-white">
                  <section class="flex justify-between px-4 lg:px-0 py-4 ">
                    <div>
                      {" "}
                      <h1 className="text-black dark:text-white text-xl font-bold tracking-widest uppercase">
                        categorías
                      </h1>
                    </div>
                    <div class="order-last ">
                      <button type="button" onClick={cycleOpenCategories}>
                        <motion.div layout>
                          <motion.div whileTap={{ rotate: 180 }}>
                            {openCategories ? (
                              <Remove className="dark:fill-white fill-black" />
                            ) : (
                              <Add className="dark:fill-white fill-black" />
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
                        open: { opacity: 1, height: "auto" },
                        collapsed: {
                          opacity: 0,
                          height: "auto",
                        },
                      }}
                    >
                      <Categories />
                    </motion.div>
                  )}
                </div>
                {/* editoriales */}
                <div className="border-b-2 border-black dark:border-white">
                  <section class="flex justify-between px-4 lg:px-0 py-4 ">
                    <div>
                      {" "}
                      <h1 className="text-black dark:text-white text-xl font-bold tracking-widest uppercase">
                        Editoriales
                      </h1>
                    </div>
                    <div className="order-last ">
                      <button type="button" onClick={cycleOpenEditorials}>
                        <motion.div layout>
                          <motion.div whileTap={{ rotate: 180 }}>
                            {openEditorials ? (
                              <Remove className="dark:fill-white fill-black" />
                            ) : (
                              <Add className="dark:fill-white fill-black" />
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
                        open: { opacity: 1, height: "auto" },
                        collapsed: {
                          opacity: 0,
                          height: "auto",
                        },
                      }}
                    >
                      <Editorials />
                    </motion.div>
                  )}
                </div>
              </AnimatePresence>
            </div>
            <div className="col-span-6 lg:col-span-4 p-2 h-auto w-auto">
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
