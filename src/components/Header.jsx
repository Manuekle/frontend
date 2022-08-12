import React from "react";

import { AnimatePresence, motion, useCycle } from "framer-motion";

// ? icons
import User from "../assets/svg/user";
import Bag from "../assets/svg/bag";
import Email from "../assets/svg/email";
import Search from "../assets/svg/search";
import Logout from "../assets/svg/logout";
import Place from "../assets/svg/place";
import Menu from "../assets/svg/menu";

// DarkMode
import DarkMode from "./DarkModeSwitch";
import Cart from "./Cart";

function Header() {
  // const [show, setShow] = useState(true);
  const [open, cycleOpen] = useCycle(false, true);

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
              <DarkMode />
            </span>
            <span className="">
              <a href="/">
                <Email fill="white" />{" "}
              </a>
            </span>
            <span className="">
              <a href="/">
                <Search color="white" />{" "}
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
            <span className="">
              <a href="/">
                <Place fill="white" />{" "}
              </a>
            </span>
            <span className="relative">
              <button
                type="button"
                onClick={cycleOpen}
                className="relative pt-1"
              >
                <Bag fill="white" />
              </button>
              <h1
                style={{ fontSize: "10px" }}
                className="rounded-full bg-white flex font-bold justify-center absolute px-1.5 py-0.5 top-0 left-3.5"
              >
                2
              </h1>
            </span>
          </div>
        </section>
      </header>
      {/* Mobile */}
      <header className="bg-black py-4 lg:hidden block">
        <section className="container mx-auto grid grid-cols-3 gap-3 px-2">
          <div className="col-span-1 flex flex-row gap-2 justify-start items-center pl-4">
            <span className="flex justify-start items-center">
              <a href="/">
                <Menu fill="white" />{" "}
              </a>
            </span>
            <span className="flex justify-start items-center">
              <a href="/">
                <Search color="white" />{" "}
              </a>
            </span>
          </div>
          <div className="col-span-1 flex flex-row gap-3 justify-center items-center">
            <span className="flex justify-center items-center ">
              <div className="text-white font-bold text-2xl text-center">
                <h1>Manganiacos</h1>
              </div>
            </span>
          </div>
          <div className="col-span-1 flex flex-row gap-2 justify-end items-center pr-4">
            <span className="flex justify-start items-center">
              <DarkMode />
            </span>
            <span className="relative">
              <button
                type="button"
                onClick={cycleOpen}
                className="relative pt-1"
              >
                <Bag fill="white" />
              </button>
              <h1
                style={{ fontSize: "10px" }}
                className="rounded-full bg-white flex font-bold justify-center absolute px-1.5 py-0.5 top-0 left-3.5"
              >
                2
              </h1>
            </span>
          </div>
        </section>
      </header>
      <>
        <section className="bg-black pt-2 pb-4">
          <div className="container mx-auto flex justify-end">
            <Search color="white" />{" "}
          </div>
        </section>
      </>

      <>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "100vh", opacity: 1, zIndex: 0 }}
              animate={{ x: "0vh" }}
              exit={{ x: "100vh", opacity: 0, zIndex: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed top-0 left-0 right-0 bottom-0"
            >
              <>
                <Cart onClick={cycleOpen} />
              </>
            </motion.div>
          )}
        </AnimatePresence>
      </>

      
    </>
  );
}

export default Header;
