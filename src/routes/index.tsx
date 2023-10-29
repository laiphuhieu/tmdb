import React from "react";
import { Routes, Route } from "react-router-dom";

import Movies from "@/pages/Movies/Movies";
import MoviesDetail from "@/pages/Movies/MoviesDetail";
import People from "@/pages/People/PeoplePage";
import Popular from "@/pages/Popular/Popular";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/movie/:movieId" element={<MoviesDetail />} />
      <Route path="/person/:personId" element={<People />} />
      <Route path="/popular" element={<Popular />} />
    </Routes>
  );
};

export default AppRoutes;
