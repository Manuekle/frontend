import React, { useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

// Icons
import Fast from "../assets/svg/fast";
import Close from "../assets/svg/close";
import Add from "../assets/svg/add";
import Remove from "../assets/svg/remove";

import Message from "./Message";

function Product(props) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 3000);
  };
  // TODO: Crear una function que me guarde el id del producto y mostarlo en el modal
  const img =
    "https://www.logocrea.com/wp-content/uploads/2016/07/fondo-gris.jpg";
  return (
    <>
      <section className="absolute bg-white top-0 right-0 flex justify-center h-full border">
        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-56 border p-5">
            <div className="col-span-1 flex justify-start gap-3 items-center">
              <span>
                <Fast fill="black" />
              </span>
              <span>
                {/* <h1 className="text-md font-bold">0 Artículos</h1> */}
                <h1 className="text-md font-bold">Vista rápida</h1>
              </span>
            </div>
            <div className="col-span-1 flex justify-end items-center pt-2">
              <span>
                <button
                  type="button"
                  className="relative"
                  onClick={props.onClick}
                >
                  <Close fill="black" color="black" />
                </button>
              </span>
            </div>
          </div>
          <hr />
          <AnimatePresence>
            {show && (
              <motion.div
                initial={{ y: "-5vh", opacity: 1 }}
                animate={{ y: "0vh" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="top-0 left-0 right-0 bottom-0"
              >
                <>
                  <Message />
                </>
              </motion.div>
            )}
          </AnimatePresence>

          <section className="grid grid-cols-3 p-8 gap-4">
            <div className="col-span-1 flex flex-row gap-8">
              <section className="w-auto h-auto">
                <div className=" shadow-lg">
                  <img
                    src={img}
                    alt=""
                    className="w-28 h-full rounded-lg border-2 border-black"
                  />
                </div>
              </section>
            </div>
            <div className="col-span-2 flex flex-col gap-1">
              <div className="grid grid-cols-2 gap-10">
                <div className="col-span-2">
                  <span className="flex items-center">
                    <h1 className="text-black text-sm font-bold uppercase tracking-widest">
                      category
                    </h1>
                  </span>
                  <span className="flex items-center">
                    <h1 className="text-black text-sm font-normal capitalize">
                      SAME NAME
                    </h1>
                  </span>
                  <span className="flex items-center">
                    <h1 className="text-black text-sm font-normal capitalize">
                      $ 12.00
                    </h1>
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="flex items-center">
                    <h1 className="text-black text-sm font-normal capitalize">
                      Cantidad:
                    </h1>
                  </span>
                  <span className="flex flex-row pt-1">
                    <button className="px-2 py-2 rounded-l-sm border-r-1 border-black p-4 border">
                      <span>
                        <Remove fill="black" />
                      </span>
                    </button>
                    <button className="px-4 py-2 border-l-0 border-r-0 border-black p-4 border">
                      0
                    </button>
                    <button className="px-2 py-2 rounded-r-sm border-l-1 border-black p-4 border">
                      <span>
                        <Add fill="black" />
                      </span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-36 flex col-span-3 justify-center">
              <button
                type="button"
                onClick={handleShow}
                className="py-4 px-8 bg-white hover:bg-zinc-200 rounded-md w-full"
              >
                <h1 className="text-sm font-bold text-black tracking-widest uppercase">
                  Añadir a la cesta
                </h1>
              </button>
            </div>
            <div className="col-span-3">
              <button className="py-4 px-8 bg-black rounded-md w-full">
                <h1 className="text-sm font-bold text-white tracking-widest uppercase">
                  Comprar ahora
                </h1>
              </button>
            </div>
            <div className="flex col-span-3 justify-center">
              <a href="/">
                <h2 className="text-xs text-zinc-600 hover:text-black font-normal border-b hover:border-b-black border-b-zinc-600">
                  Ver detalles
                </h2>
              </a>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Product;
