import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import AllProducts from "../pages/Products/AllProducts";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
