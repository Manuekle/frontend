import React, { useState } from "react";
import Cart from "../assets/svg/cart";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import Product from "./Product";

// import Modal from "./Modal";

// import { AnimatePresence } from "framer-motion";
function Card(props) {
  // const [isModalOpen, setModalOpen] = useState(false);

  // const close = () => setModalOpen(false);
  // const open = () => setModalOpen(true);
  const [openProduct, cycleOpenProduct] = useCycle(false, true);

  const img =
    "https://www.logocrea.com/wp-content/uploads/2016/07/fondo-gris.jpg";
  // const img =
  //   "https://images-na.ssl-images-amazon.com/images/I/81nRRMSeyvS.jpg";

  return (
    <>
      <section className="w-auto h-auto">
        <div className="w-full h-full shadow-lg">
          <section className="relative z-50">
            <img
              src={img}
              alt=""
              className="rounded-t-lg border-t-2 border-l-2 border-r-2 border-t-black border-l-black border-r-black"
            />
            <div className="absolute top-2 right-2 flex">
              <span className="bg-black px-2 py-2 bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg">
                <h1 className="tracking-widest uppercase text-white text-xs">
                  Disponible
                </h1>
              </span>
            </div>
          </section>
          <div className="p-2 bg-white border-b-2 border-l-2 border-r-2 border-b-black border-l-black border-r-black rounded-b-lg">
            <div className="grid grid-cols-6">
              <div className="col-span-5">
                <h1 className="text-black text-sm font-bold uppercase">
                  SAME NAME
                </h1>
                <h1 className="text-black text-sm font-bold uppercase">
                  $ 12.00
                </h1>
              </div>
              <div className="col-span-1 flex items-center justify-center">
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
