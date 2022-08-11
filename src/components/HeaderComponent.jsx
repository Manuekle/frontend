import React from "react";

import img from "../assets/imgs/manganiacos.jpg";

// ? icons
import User from "../assets/svg/user";
import Bag from "../assets/svg/bag";
import Email from "../assets/svg/email";
import Search from "../assets/svg/search";
import Logout from "../assets/svg/logout";

function HeaderComponent() {
  return (
    <>
      {/* Desktop */}
      <header className="bg-black py-4 hidden lg:block">
        <section className="container mx-auto grid grid-cols-6 gap-62 py-2">
          <div className="col-span-2 flex flex-row gap-3 justify-start items-center">
            {/* <div className="">
              <img src={img} alt="Manganiacos" className="rounded-full w-12" />
            </div> */}
            <div className="text-white font-bold text-2xl">
              <h1>Manganiacos</h1>
            </div>
          </div>
          <div className="col-span-2 flex flex-row gap-3 justify-center items-center">
            <div className="text-white font-normal">
              <h1 style={{ fontSize: "14px" }}>Tienda</h1>
            </div>
            <div className="text-white font-normal">
              <h1 style={{ fontSize: "14px" }}>Categorias</h1>
            </div>
            <div className="text-white font-normal">
              <h1 style={{ fontSize: "14px" }}>Nosotros</h1>
            </div>
          </div>
          <div className="col-span-2 flex flex-row gap-3 justify-end items-center">
            <span className="">
              <a href="/">
                <Email fill="white" />{" "}
              </a>
            </span>
            <span className="">
              <a href="/">
                <Search fill="white" />{" "}
              </a>
            </span>
            <span className="">
              <a href="/">
                <User fill="white" />{" "}
              </a>
            </span>
            <span className="">
              <a href="/">
                <Logout fill="white" />{" "}
              </a>
            </span>
            <span className="relative">
              <a href="/" className="relative">
                <Bag fill="white" />
              </a>
              <h1
                style={{ fontSize: "10px" }}
                className="rounded-full bg-white flex justify-center absolute px-1 py-0.2 top-0 left-3.5"
              >
                0
              </h1>
            </span>
          </div>
        </section>
      </header>
      {/* Mobile */}
      <header className="bg-black py-4 lg:hidden block">
        <section className="container mx-auto grid grid-cols-3 gap-1 px-2">
          <div className="col-span-1 flex flex-row gap-3 justify-start items-center">
            <div className="text-white font-bold text-2xl"></div>
          </div>
          <div className="col-span-1 flex flex-row gap-3 justify-start items-center">
            <div className="">
              <img
                src={img}
                alt="Manganiacos"
                className="rounded-full w-full"
              />
            </div>
            <div className="text-white font-bold text-2xl">
              <h1>Manganiacos</h1>
            </div>
          </div>
          <div className="col-span-1 flex flex-row gap-3 justify-end items-center">
            <div className="text-white font-bold text-2xl">
              <h1></h1>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

export default HeaderComponent;
