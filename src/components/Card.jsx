import React from "react";
import Cart from "../assets/svg/cart";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import Product from "./Product";

import { Link } from "react-router-dom";

function Card(props) {
  const { product } = props;

  const [openProduct, cycleOpenProduct] = useCycle(false, true);


  return (
    <>
      <section className="w-auto h-auto">
        <div className="shadow-lg">
          <section className="relative z-50">
            <Link to={`/product/${product._id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="rounded-t-lg border-t-2 border-l-2 border-r-2 dark:border-t-white dark:border-l-white dark:border-r-white border-t-black border-l-black border-r-black"
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
          <div className="p-2 bg-white border-b-2 border-l-2 border-r-2 dark:border-b-white dark:border-l-white dark:border-r-white border-b-black border-l-black border-r-black rounded-b-lg h-30">
            <div className="grid grid-cols-6">
              <div className="col-span-5">
                <h1 className="text-black text-sm font-bold uppercase">
                  {product.name}
                </h1>
                <h1 className="text-black text-sm font-bold uppercase">
                  $ {product.price}
                </h1>
              </div>
              <div className="col-span-1 flex items-start justify-center">
                <button
                  type="button"
                  onClick={cycleOpenProduct}
                  className="bg-black p-2 rounded-md"
                >
                  <span>
                    <Cart fill="white" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <>
        {/* <AnimatePresence>
          {isModalOpen && (
            <Modal isModalOpen={isModalOpen} handleClose={close}>
              A nice message
            </Modal>
          )}
        </AnimatePresence> */}
      </>
      <>
        <AnimatePresence>
          {openProduct && (
            <motion.div
              initial={{ x: "100vh", opacity: 1, zIndex: 0 }}
              animate={{ x: "0vh" }}
              exit={{ x: "100vh", opacity: 1, zIndex: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed top-0 left-0 right-0 bottom-0"
            >
              <>
                <Product onClick={cycleOpenProduct} />
              </>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </>
  );
}

export default Card;
