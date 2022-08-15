// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Header
import Header from "../components/Header";

// Footer
import Footer from "../components/Footer";

// Pages
// auth pages
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

// store page
import StorePage from "../pages/StorePage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";

import RegisterPage from "../pages/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage";

// DashboardPage
import DashboardPage from "./Dashboard";
import ProfilePage from "../pages/ProfilePage";
import OrdersPage from "../pages/OrdersPage";

function Base() {
  return (
    <main className="bg-white dark:bg-black">
      <Router>
        <Header />
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
          {/* product */}
          <Route path="/product/:id" element={<ProductPage />} />
          {/* dahboard */}
          <Route path="/dashboard" element={<DashboardPage />}>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="orders" element={<OrdersPage />} />
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
