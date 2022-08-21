/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';

import { Link, Routes, Route, useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

// pages
import AccountPage from '../pages/AccountPage';
import OrdersPage from '../pages/OrdersPage';
import InventoryPage from '../pages/InventoryPage';
import ProductEditPage from '../pages/ProductEditPage';

// icons
import Account from '../assets/svg/account';
import Analytics from '../assets/svg/analytics';
import Box from '../assets/svg/box';
import Contact from '../assets/svg/contact';
import Terms from '../assets/svg/terms';
import Receipt from '../assets/svg/receipt';
import ShoppingCart from '../assets/svg/shoppingCart';
import OpenDoor from '../assets/svg/openDoor';
import UserSettings from '../assets/svg/userSettings';

import NotFoundPage from '../pages/NotFoundPage';

function Dashboard() {
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigate('/account/login');
    }
  }, [navigate, userInfo]);

  return (
    <section className="container mx-auto my-10 lg:px-0 pb-12">
      <div className="grid grid-cols-8 gap-8">
        <div className="lg:h-[415px] rounded-md col-span-8 lg:col-span-2 bg-light-200 dark:bg-dark-200 p-4">
          <div className="flex flex-col gap-4">
            <Link to="">
              <span className="flex flex-row gap-1 items-center">
                <Account className="dark:fill-white fill-black" />
                <h1 className="text-md font-bold text-black dark:text-white">
                  Cuenta
                </h1>
              </span>
            </Link>
            <span className="flex flex-row gap-1 items-center">
              <Receipt className="dark:fill-white fill-black" />
              <h1 className="text-md font-bold text-black dark:text-white">
                Compras
              </h1>
            </span>
            <Link to="/cart/0">
              <span className="flex flex-row gap-1 items-center">
                <ShoppingCart className="dark:fill-white fill-black" />
                <h1 className="text-md font-bold text-black dark:text-white">
                  Carrito
                </h1>
              </span>
            </Link>
            <span className="flex flex-row gap-1 items-center">
              <Analytics className="dark:fill-white fill-black" />
              <h1 className="text-md font-bold text-black dark:text-white">
                Estadísticas
              </h1>
            </span>
            <Link to="inventory">
              <span className="flex flex-row gap-1 items-center">
                <Box className="dark:fill-white fill-black" />
                <h1 className="text-md font-bold text-black dark:text-white">
                  Productos
                </h1>
              </span>
            </Link>
            <span className="flex flex-row gap-1 items-center pt-8">
              <Contact className="dark:fill-white fill-black" />
              <h1 className="text-md font-bold text-black dark:text-white">
                FAQ's
              </h1>
            </span>
            <span className="flex flex-row gap-1 items-center">
              <UserSettings className="dark:fill-white fill-black" />
              <h1 className="text-md font-bold text-black dark:text-white">
                Configuración
              </h1>
            </span>
            <span className="flex flex-row gap-1 items-center">
              <Terms className="dark:fill-white fill-black" />
              <h1 className="text-md font-bold text-black dark:text-white">
                Términos & Condiciones
              </h1>
            </span>
            <span className="flex flex-row gap-1 items-center">
              <OpenDoor className="dark:fill-white fill-black" />
              <h1 className="text-md font-bold text-black dark:text-white">
                Cerrar Sesión
              </h1>
            </span>
          </div>
        </div>
        <div className="rounded-md col-span-8 lg:col-span-6 bg-light-200 dark:bg-dark-200 p-4">
          <Routes>
            <Route index element={<AccountPage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="inventory" element={<InventoryPage />} />
            <Route
              path="inventory/product/:id/edit"
              element={<ProductEditPage />}
            />
            {/* not found */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
