/* eslint-disable no-console */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-case-declarations */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { Link } from 'react-router-dom';
import Cart from '../assets/svg/cart';
import Product from './Product';

function Card(props) {
  const { product } = props;

  const [openProduct, cycleOpenProduct] = useCycle(false, true);

  const openProductHandler = () => {
    cycleOpenProduct();
  };

  return (
    <>
      <section>
        <div className="shadow-lg rounded-lg">
          <section className="relative">
            <Link to={`/product/${product._id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="rounded-t-lg w-full xl:h-96 h-full object-cover relative"
              />
            </Link>
            <div className="absolute top-2 right-2 flex">
              {product.countInStock > 0 ? (
                <span className="bg-black px-2 py-2 bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg">
                  <h1 className="tracking-widest uppercase text-white text-xs">
                    Disponible
                  </h1>
                </span>
              ) : (
                <span className="bg-black px-2 py-2 bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg">
                  <h1 className="tracking-widest uppercase text-white text-xs">
                    Agotado
                  </h1>
                </span>
              )}
            </div>
          </section>
          <div className="p-2 bg-zinc-100 dark:bg-dark-200 rounded-b-lg h-20">
            <div className="grid grid-cols-6">
              <div className="col-span-5">
                <h1 className="text-black dark:text-white text-sm font-bold uppercase">
                  {product.name} Vol. {product.volume}
                </h1>
                <h1 className="text-black dark:text-white text-sm font-bold uppercase">
                  $ {product.price}
                </h1>
              </div>
              <div className="col-span-1 flex items-start justify-center">
                <button
                  type="button"
                  onClick={openProductHandler}
                  className="dark:bg-zinc-800 bg-zinc-300 p-2 rounded-md"
                >
                  <span>
                    <Cart className="fill-black dark:fill-white" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <AnimatePresence>
          {isModalOpen && (
            <Modal isModalOpen={isModalOpen} handleClose={close}>
              A nice message
            </Modal>
          )}
        </AnimatePresence> */}
      <AnimatePresence>
        {openProduct && (
          <motion.div
            initial={{ x: '100vh', opacity: 1, zIndex: 1 }}
            animate={{ x: '0vh' }}
            exit={{ x: '100vh', opacity: 1, zIndex: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 bottom-0"
          >
            <>
              <Product onClick={cycleOpenProduct} product={product} />
            </>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Card;
