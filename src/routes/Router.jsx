import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage";
import { ProductsContextProvider } from "../contexts/ProductsContext";

function Router() {
  return (
    <ProductsContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ProductsContextProvider>
  );
}

export default Router;
