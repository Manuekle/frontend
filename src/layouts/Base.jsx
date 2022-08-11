// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Header
import Header from "../components/Header";

// Footer
import Footer from "../components/Footer";

// Pages
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

// import

function Base() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default Base;
