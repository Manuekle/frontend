import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

// pages
import ProfilePage from "../pages/ProfilePage";
import OrdersPage from "../pages/OrdersPage";

function Dashboard() {

  let navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigate("/account/login");
    }
  }, [navigate, userInfo]);

  return (
    <>
      <h1 className="text-black dark:text-white">Dashboard</h1>
      <Routes>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="orders" element={<OrdersPage />} />
      </Routes>
    </>
  );
}

export default Dashboard;
