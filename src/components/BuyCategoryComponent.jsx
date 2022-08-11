import React from "react";
import Arrow from "../assets/svg/arrow";

import Card from "./CardComponent";
function BuyCategoryComponent() {
  return (
    <section className="pt-8">
      <div className="bg-black bg-center h-56 flex items-center justify-center rounded-lg shadow-lg">
        <h1 className="text-white font-bold text-5xl text-center pt-8 pb-8 tracking-wide">
          COMPRA POR CATEGORIAS
        </h1>
      </div>
      <br />
      {/* shounen */}
      <>
        <div className="flex flex-row gap-8 pt-2 pb-2">
          <h1 className="text-black font-bold pb-2 tracking-wide">SHOUNEN</h1>
        </div>
        <div className="grid grid-cols-6 gap-8">
          {/* card */}
          <Card />
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
      <>
        <div className="flex flex-row gap-8 pt-2 pb-2">
          <h1 className="text-black font-bold pb-2 tracking-wide">SHOJO</h1>
        </div>
        <div className="grid grid-cols-6 gap-8">
          {/* card */}
          <Card />
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
      <>
        <div className="flex flex-row gap-8 pt-2 pb-2">
          <h1 className="text-black font-bold pb-2 tracking-wide">SEINEN</h1>
        </div>
        <div className="grid grid-cols-6 gap-8">
          {/* card */}
          <Card />
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
      <>
        <div className="flex flex-row gap-8 pt-2 pb-2">
          <h1 className="text-black font-bold pb-2 tracking-wide">KODOMO</h1>
        </div>
        <div className="grid grid-cols-6 gap-8">
          {/* card */}
          <Card />
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
      <>
        <div className="flex flex-row gap-8 pt-2 pb-2">
          <h1 className="text-black font-bold pb-2 tracking-wide">JOSEI</h1>
        </div>
        <div className="grid grid-cols-6 gap-8">
          {/* card */}
          <Card />
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

export default BuyCategoryComponent;
