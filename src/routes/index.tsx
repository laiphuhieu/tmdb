import React from "react";
import { Routes, Route } from "react-router-dom";

import Movies from "@/pages/Movies";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
    </Routes>
  );
};

export default AppRoutes;
