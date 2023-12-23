import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import AllProducts from "../pages/Products/AllProducts";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CreateProduct from "../pages/Products/CreateProduct";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/products/create-product" element={<CreateProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
