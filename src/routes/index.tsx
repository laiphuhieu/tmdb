import React from "react";
import { Routes, Route } from "react-router-dom";

import Movies from "@/pages/Movies/Movies";
import MoviesDetail from "@/pages/Movies/MoviesDetail";
import Popular from "@/pages/Popular/Popular";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/movie/:movieId" element={<MoviesDetail />} />
      <Route path="/popular" element={<Popular />} />
    </Routes>
  );
};

export default AppRoutes;
