/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/button-has-type */
import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AnimatePresence, motion, useCycle } from 'framer-motion';

import { logout } from '../actions/userActions';

// ? icons
import User from '../assets/svg/user';
import Bag from '../assets/svg/bag';
import Email from '../assets/svg/email';
import Search from '../assets/svg/search';
import Logout from '../assets/svg/logout';
import Place from '../assets/svg/place';
import Menu from '../assets/svg/menu';
import Drop from '../assets/svg/drop';

// DarkMode
import DarkMode from './DarkModeSwitch';
import Cart from './Cart';
import Searcher from './Searcher';

function Header() {
  const [open, cycleOpen] = useCycle(false, true);
  const [searcher, cycleOpenSearcher] = useCycle(false, true);

  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;
  // console.log(cartItems);

  const { city } = shippingAddress;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    if (userInfo) {
      navigate('/account/login');
    }
  };

  // useEffect(() => {
  // }, [userInfo, navigate]);
  return (
    <>
      {/* Desktop */}
      <header className="dark:bg-dark-100 bg-light-100 py-4 hidden lg:block b">
        <section className="container mx-auto grid grid-cols-6 gap-62 py-2">
          <div className="col-span-2 flex flex-row gap-3 justify-start items-center">
            {/* <div className="">
              <img src={img} alt="Manganiacos" className="rounded-full w-12" />
            </div> */}
            <div className="flex flex-row gap-3">
              <Link to="/">
                <h1 className="dark:text-white text-black font-bold text-2xl capitalize tracking-wider">
                  Manganiacos
                </h1>
              </Link>
              <div className="flex flex-row items-center gap-0.5">
                <span>
                  <Drop className="dark:fill-white fill-black" />
                </span>
                <span className="flex flex-col gap-0">
                  <h1 className="text-black dark:text-white text-xs font-normal">
                    Enviar a
                  </h1>
                  <h1 className="text-black dark:text-white text-xs font-normal capitalize">
                    {city}
                  </h1>
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-row gap-3 justify-center items-center">
            <div className="dark:text-white text-black active:text-url-100 font-semibold">
              <Link to="/" style={{ fontSize: '14px' }}>
                Inicio
              </Link>
            </div>
            <div className="dark:text-white text-black active:text-url-100 font-semibold">
              <Link to="/store" style={{ fontSize: '14px' }}>
                Tienda
              </Link>
            </div>
            <div className="dark:text-white text-black font-semibold">
              <h1 style={{ fontSize: '14px' }}>Nosotros</h1>
            </div>
          </div>
          <div className="col-span-2 flex flex-row gap-3 justify-end items-center">
            <span className="relative flex flex-row">
              <button
                className="relative pt-1"
                type="button"
                onClick={cycleOpenSearcher}
              >
                <Search className="dark:text-white text-black" />{' '}
              </button>
            </span>
            <span className="">
              <DarkMode />
            </span>
            <span className="">
              <a href="/">
                <Email className="dark:fill-white fill-black" />{' '}
              </a>
            </span>
            {userInfo ? (
              <>
                <span className="pt-1">
                  <button onClick={logoutHandler}>
                    <Logout className="dark:fill-white fill-black" />{' '}
                  </button>
                </span>
                <span className="">
                  <Link to="/dashboard">
                    <Place className="dark:fill-white fill-black" />{' '}
                  </Link>
                </span>
              </>
            ) : (
              <span className="">
                <Link to="/account/login">
                  <User className="dark:fill-white fill-black" />{' '}
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
                style={{ fontSize: '10px' }}
                className="rounded-full bg-black dark:bg-white text-white dark:text-black flex font-bold justify-center absolute px-1.5 py-0.5 top-0 left-3.5"
              >
                {cartItems.reduce((acc, item) => acc + item.qty, 0)}
              </h1>
            </span>
          </div>
        </section>
      </header>
      {/* Mobile */}
      <header className="dark:bg-dark-100 bg-white py-4 lg:hidden block">
        <section className="container mx-auto grid grid-cols-3 gap-3 px-2">
          <div className="col-span-1 flex flex-row gap-2 justify-start items-center pl-4">
            <span className="flex justify-start items-center">
              <a href="/">
                <Menu className="dark:fill-white fill-black" />{' '}
              </a>
            </span>
            <span className="flex justify-start items-center">
              <button
                className="relative"
                type="button"
                onClick={cycleOpenSearcher}
              >
                <Search className="dark:text-white text-black" />{' '}
              </button>
            </span>
          </div>
          <div className="col-span-1 flex flex-row gap-3 justify-center items-center">
            <span className="flex justify-center items-center ">
              <Link to="/">
                <h1 className="dark:text-white text-black font-bold text-2xl capitalize tracking-wider">
                  Manganiacos
                </h1>
              </Link>
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
                style={{ fontSize: '10px' }}
                className="rounded-full bg-black dark:bg-white text-white dark:text-black flex font-bold justify-center absolute px-1.5 py-0.5 top-0 left-3.5"
              >
                {cartItems.reduce((acc, item) => acc + item.qty, 0)}
              </h1>
            </span>
          </div>
        </section>
      </header>
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
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100vh', opacity: 1, zIndex: 1 }}
            animate={{ x: '0vh' }}
            exit={{ x: '100vh', opacity: 1, zIndex: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 bottom-0"
          >
            <>
              <Cart onClick={cycleOpen} />
            </>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {searcher && (
          <motion.div
            initial={{ x: '100vh', opacity: 1, zIndex: 1 }}
            animate={{ x: '0vh' }}
            exit={{ x: '100vh', opacity: 1, zIndex: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 bottom-0"
          >
            <>
              <Searcher onClick={cycleOpenSearcher} />
            </>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
