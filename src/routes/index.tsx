import React from "react";
import { Routes, Route } from "react-router-dom";

import Movies from "@/pages/Movies/Movies";
import TrendingTrailer from "@/pages/Movies/TrendingTrailer";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/trending/movie/:trendingId" element={<TrendingTrailer />} />
    </Routes>
  );
};

export default AppRoutes;
