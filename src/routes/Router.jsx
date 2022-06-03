import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ComparisonPage from "../pages/ComparisonPage";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ComparisonPage />} />
      </Routes>
    </>
  );
}

export default Router;
