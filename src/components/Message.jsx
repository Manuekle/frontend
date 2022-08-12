import React from "react";

import Check from "../assets/svg/check";

function Message() {
  return (
    <>
      <section className="bg-emerald-600 p-2 py-4">
        <div className="grid grid-cols-3 gap-2 px-4">
          <div className="col-span-2 flex flex-row  gap-2">
            <span className="flex items-center">
              <Check fill="white" />
            </span>
            <span className="text-md font-bold text-white flex items-cente">
              ¡Articulo añadido a su cesta!
            </span>
          </div>
          <div className="col-span-1 flex justify-end items-center">
            <a href="/" className="text-white text-sm font-normal border-b hover:border-b-white border-b-gray-300">Ver carrito</a>
          </div>
        </div>
        {/* ¡Articulo añadido a su cesta! */}
      </section>
    </>
  );
}

export default Message;
