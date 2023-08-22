import React from "react";
import { Routes, Route } from "react-router-dom";

import Movies from "@/pages/Movies/Movies";
// import TrendingTrailer from "@/pages/Movies/TrendingTrailer";
import Popular from "@/pages/Popular/Popular";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Movies  />} />
      {/* <Route path="/discover/:trailerId" element={<TrendingTrailer />} /> */}
      <Route path="/popular" element={<Popular />}/>
      
    </Routes>
  );
};

export default AppRoutes;
