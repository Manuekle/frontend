// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

function Base() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default Base;
