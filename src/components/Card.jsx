import React from "react";
import CartAdd from "../assets/svg/cartAdd";
import Tag from "../assets/svg/tag";
function Card() {
  return (
    <>
      <div className="col-span-1 relative">
        <img
          src="https://m.media-amazon.com/images/I/516CtkXyKOL._AC_UL320_.jpg"
          alt=""
          width="100%"
          className="rounded-lg"
        />
        {/* disponible */}
        <div className="bg-green-500 absolute top-2 right-5 flex items-center justify-center rounded-md">
          <span className="text-sm text-white font-bold px-2 tracking-wide">
            Disponible
          </span>
        </div>
        {/* Agotado */}
        <div className="bg-red-500 absolute top-2 right-5 flex items-center justify-center rounded-md">
          <span className="text-sm text-white font-bold px-2 tracking-wide">
            Agotado
          </span>
        </div>
        {/* Caracteristicas */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-between items-center p-2 bg-black bg-opacity-70 rounded-b-lg shadow-xl">
          <div className="grid grid-cols-8 gap-1">
            <span className="col-span-7 flex justify-start items-center">
              <h1 className="text-white font-bold text-sm tracking-widest uppercase">
                Name product
              </h1>
            </span>
            <span className="col-span-1 flex justify-end items-center">
              <a
                href="/"
                className="text-white font-bold text-md tracking-wide uppercase"
              >
                <CartAdd fill="white" />
              </a>
            </span>
          </div>
          {/* is Open or touch*/}
          <div className="grid grid-cols-1 pt-1">
            <span className="col-span-1 flex flex-row gap-2 items-center pb-1">
              <h1 className="text-white font-bold text-sm capitalize">
                $ 12.00 USD
              </h1>
            </span>
            <span className="col-span-1 flex flex-row gap-2 items-center pb-1">
              <Tag fill="white" />
              <h1 className="text-white font-bold text-sm capitalize">
                Shounen
              </h1>
            </span>
            <span className="col-span-1">
              <p className="text-white text-xs capitalize">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, fugit!
              </p>
            </span>
            <span className="col-span-1">
              <button className="bg-white rounded-sm font-bold px-2 text-xs">
                Ver más
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
