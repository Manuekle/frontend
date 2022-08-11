// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Header
import HeaderComponent from "../components/HeaderComponent";

// Footer
import FooterComponent from "../components/FooterComponent";

// Pages
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

function Base() {
  return (
    <>
      <HeaderComponent />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <FooterComponent />
    </>
  );
}

export default Base;
