// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Header
import Header from '../components/Header';

// Footer
import Footer from '../components/Footer';

import Back from '../components/Back';

// Pages
// auth pages
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

// store page
import StorePage from '../pages/StorePage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import ShippingPage from '../pages/ShippingPage';
import PaymentPage from '../pages/PaymentPage';
import PlaceOrderPage from '../pages/PlaceOrderPage';

import RegisterPage from '../pages/RegisterPage';
import NotFoundPage from '../pages/NotFoundPage';

// DashboardPage
import DashboardPage from './Dashboard';
import AccountPage from '../pages/AccountPage';
import OrdersPage from '../pages/OrdersPage';
import InventoryPage from '../pages/InventoryPage';
import ProductEditPage from '../pages/ProductEditPage';

function Base() {
  return (
    <main className="bg-light-100 dark:bg-dark-100">
      <Router>
        <Header />
        <div className="container mx-auto lg:px-0 px-4 pt-8 lg:pt-10">
          <Back />
        </div>
        <Routes>
          {/* home */}
          <Route path="/" element={<HomePage />} />
          {/* auth */}
          <Route path="/account/login" element={<LoginPage />} />
          <Route path="/account/register" element={<RegisterPage />} />
          {/* store */}
          <Route path="/store" element={<StorePage />} />
          {/* cart */}
          <Route path="/cart/:id" element={<CartPage />} />
          {/* shipping */}
          <Route path="/shipping" element={<ShippingPage />} />
          {/* payment */}
          <Route path="/payment" element={<PaymentPage />} />
          {/* place order */}
          <Route path="/placeorder" element={<PlaceOrderPage />} />
          {/* product */}
          <Route path="/product/:id" element={<ProductPage />} />
          {/* dahboard */}
          <Route path="/dashboard/*" element={<DashboardPage />}>
            <Route index element={<AccountPage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="inventory" element={<InventoryPage />} />
            <Route
              path="inventory/product/:id/edit"
              element={<ProductEditPage />}
            />
          </Route>
          {/* not found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default Base;
