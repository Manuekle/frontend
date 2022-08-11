import React from "react";
import Arrow from "../assets/svg/arrow";

function Buy() {
  return (
    <section className="pt-8">
      <div className="bg-black bg-center h-56 flex items-center justify-center rounded-lg shadow-lg">
        <h1 className="text-white font-bold text-5xl text-center pt-8 pb-8 tracking-wide">
          COMPRA POR CATEGORIAS
        </h1>
      </div>
      <br />      
      <>
      
        <div className="grid grid-cols-6 gap-8">
          {/* card */}
          
        </div>
        {/* slider */}
        <div className="flex flex-row justify-center items-centered gap-4 pt-6 pb-6">
          <span className="border-2 border-black p-4 rounded-lg shadow-lg">
            <Arrow />
          </span>
          <span
            className="border-2 border-black p-4 rounded-lg shadow-lg"
            style={{
              transform: "rotate(180deg)",
            }}
          >
            <Arrow />
          </span>
        </div>
      </>
      
    </section>
  );
}

export default Buy;
