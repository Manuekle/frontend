import React from "react";
import Cart from "../assets/svg/cart";
function Category() {
  const img =
    "https://images-na.ssl-images-amazon.com/images/I/81nRRMSeyvS.jpg";

  return (
    <section className="w-auto h-auto">
      <div className="relative w-full h-full shadow-lg">
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
        <div className="p-2 bg-white border-b-2 border-l-2 border-r-2 border-b-black border-l-black border-r-black rounded-b-lg">
          <div className="grid grid-cols-6">
            <div className="col-span-5">
              <h1 className="text-black text-sm font-bold uppercase">
                Mieruko-chan
              </h1>
              <h1 className="text-black text-sm font-bold uppercase">
                $ 12.00
              </h1>
            </div>
            <div className="col-span-1 flex items-center justify-center">
                <span className="bg-black p-2 rounded-md">
                    <Cart fill="white"/>
                </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
