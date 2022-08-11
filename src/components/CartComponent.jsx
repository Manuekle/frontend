import React, { useState } from "react";

// Icons
import Bag from "../assets/svg/bag";
import Close from "../assets/svg/close";

function CartComponent() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show ? (
        <>
          <section className="absolute bg-white top-0 right-0 flex justify-center h-full border">
            <div className="flex flex-col">
              <div className="grid grid-cols-2 gap-56 border p-5">
                <div className="col-span-1 flex justify-start gap-3">
                  <span>
                    <Bag fill="black" />
                  </span>
                  <span>
                    {/* <h1 className="text-md font-bold">0 Artículos</h1> */}
                    <h1 className="text-md font-bold">Carrito</h1>
                  </span>
                </div>
                <div className="col-span-1 flex justify-end items-center">
                  <span>
                    <button
                      type="button"
                      onClick={() => {
                        setShow(!show);
                      }}
                      className="relative"
                    >
                      <Close fill="black" />
                    </button>
                  </span>
                </div>
              </div>
              <hr />
              {/* Empty */}
              <section className="mt-96 flex items-center justify-center">
                <div className="flex flex-col gap-8">
                  <h1 className="text-center text-md font-normal">
                    Su carrito está vacío
                  </h1>
                  <button className="py-3 px-8 bg-black rounded-md">
                    <h1 className="text-sm font-bold text-white tracking-widest uppercase">
                      Empezar a Comprar
                    </h1>
                  </button>
                </div>
              </section>
            </div>
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default CartComponent;
