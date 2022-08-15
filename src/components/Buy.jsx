import React from "react";
import Arrow from "../assets/svg/arrow";
// import Category from "./Category";
// import Card from "./Card";

function Buy() {
  return (
    <>
      <section className="pt-8">
        <div className="border-2 border-black dark:border-white bg-gradient-to-r from-black via-neutral-900 to-stone-800 bg-center h-28 mx-4 xl:mx-0 xl:h-56 flex items-center justify-center rounded-lg shadow-lg">
          <h1 className="text-white font-bold text-lg xl:text-5xl text-center tracking-wide">
            LOS MAS RECOMENDADOS
          </h1>
        </div>
        <br />
        <>
          <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-8 px-4 xl:px-0">
            {/* card */}
            {/* <Card /> */}
          </div>
          {/* slider */}
          <div className="flex flex-row justify-center items-centered gap-4 pt-6 pb-6">
            <span className="border-2 border-black dark:border-white p-4 rounded-lg shadow-lg">
              <Arrow className="dark:fill-white fill-black" />
            </span>
            <span className="border-2 border-black dark:border-white p-4 rounded-lg shadow-lg">
              <Arrow
                className="dark:fill-white fill-black"
                style={{
                  transform: "rotate(180deg)",
                }}
              />
            </span>
          </div>
        </>
      </section>
    </>
  );
}

export default Buy;
