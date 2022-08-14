import React, { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AnimatePresence, motion, useCycle } from "framer-motion";

import { logout } from "../actions/userActions";

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
  const [open, cycleOpen] = useCycle(false, true);
  const [searcher, cycleOpenSearcher] = useCycle(false, true);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    if (userInfo) {
      navigate("/account/login");
    }
  };

  // useEffect(() => {
  // }, [userInfo, navigate]);
  return (
    <>
      {/* Desktop */}
      <header className="dark:bg-black bg-white py-4 hidden lg:block border-b-2 dark:border-b-white border-b-black">
        <section className="container mx-auto grid grid-cols-6 gap-62 py-2">
          <div className="col-span-2 flex flex-row gap-3 justify-start items-center">
            {/* <div className="">
              <img src={img} alt="Manganiacos" className="rounded-full w-12" />
            </div> */}
            <div className="dark:text-white text-black font-bold text-2xl">
              <h1>Manganiacos</h1>
            </div>
          </div>
          <div className="col-span-2 flex flex-row gap-3 justify-center items-center">
            <div className="dark:text-white text-black font-normal">
              <Link to="/store" style={{ fontSize: "14px" }}>
                Tienda
              </Link>
            </div>
            <div className="dark:text-white text-black font-normal">
              <h1 style={{ fontSize: "14px" }}>Categorias</h1>
            </div>
            <div className="dark:text-white text-black font-normal">
              <h1 style={{ fontSize: "14px" }}>Nosotros</h1>
            </div>
          </div>
          <div className="col-span-2 flex flex-row gap-3 justify-end items-center">
            <span className="relative flex flex-row">
              <AnimatePresence>
                {searcher && (
                  <motion.div
                    initial={{ x: "0vh", opacity: 1 }}
                    animate={{ x: "-1vh" }}
                    exit={{ x: "0vh", opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="top-0 left-0 right-0 bottom-0"
                  >
                    <>
                      <section className="bg-black">
                        <input
                          type="text"
                          className="w-full text-white font-normal px-4 rounded-sm bg-black border-2 border-white"
                          placeholder="Buscar"
                        />
                      </section>
                    </>
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                className="relative pt-1"
                type="button"
                onClick={cycleOpenSearcher}
              >
                <Search className="dark:text-white text-black" />{" "}
              </button>
            </span>
            <span className="">
              <DarkMode />
            </span>
            <span className="">
              <a href="/">
                <Email className="dark:fill-white fill-black" />{" "}
              </a>
            </span>
            {userInfo ? (
              <>
                <span className="pt-1">
                  <button onClick={logoutHandler}>
                    <Logout className="dark:fill-white fill-black" />{" "}
                  </button>
                </span>
                <span className="">
                  <Link to="/dashboard">
                    <Place className="dark:fill-white fill-black" />{" "}
                  </Link>
                </span>
              </>
            ) : (
              <span className="">
                <Link to="/account/login">
                  <User className="dark:fill-white fill-black" />{" "}
                </Link>
              </span>
            )}

            <span className="relative">
              <button
                type="button"
                onClick={cycleOpen}
                className="relative pt-1"
              >
                <Bag className="dark:fill-white fill-black" />
              </button>
              <h1
                style={{ fontSize: "10px" }}
                className="rounded-full bg-black dark:bg-white text-white dark:text-black flex font-bold justify-center absolute px-1.5 py-0.5 top-0 left-3.5"
              >
                2
              </h1>
            </span>
          </div>
        </section>
      </header>
      {/* Mobile */}
      <header className="dark:bg-black bg-white py-4 lg:hidden block border-b-2 dark:border-b-white border-b-black">
        <section className="container mx-auto grid grid-cols-3 gap-3 px-2">
          <div className="col-span-1 flex flex-row gap-2 justify-start items-center pl-4">
            <span className="flex justify-start items-center">
              <a href="/">
                <Menu className="dark:fill-white fill-black" />{" "}
              </a>
            </span>
            <span className="flex justify-start items-center">
              <a href="/">
                <Search className="dark:text-white text-black" />{" "}
              </a>
            </span>
          </div>
          <div className="col-span-1 flex flex-row gap-3 justify-center items-center">
            <span className="flex justify-center items-center ">
              <div className="text-white dark:text-black font-bold text-2xl text-center">
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
                <Bag className="dark:fill-white fill-black" />
              </button>
              <h1
                style={{ fontSize: "10px" }}
                className="rounded-full bg-black dark:bg-white text-white dark:text-black flex font-bold justify-center absolute px-1.5 py-0.5 top-0 left-3.5"
              >
                2
              </h1>
            </span>
          </div>
        </section>
      </header>
      <>
        {/* <AnimatePresence>
          {searcher && (
            <motion.div
              initial={{ y: "-2vh", opacity: 1 }}
              animate={{ y: "0vh" }}
              exit={{ y: "-2vh", opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="top-0 left-0 right-0 bottom-0"
            >
              <>
                <section className="bg-black pt-4 pb-4 border-b border-b-gray-100">
                  <div className="container mx-auto flex justify-center">
                    <Search color="white" />{" "}
                  </div>
                </section>
              </>
            </motion.div>
          )}
        </AnimatePresence> */}
      </>
      <>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "100vh", opacity: 1, zIndex: 0 }}
              animate={{ x: "0vh" }}
              exit={{ x: "100vh", opacity: 1, zIndex: 0 }}
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
