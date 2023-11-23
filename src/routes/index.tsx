import React from "react";
import { Routes, Route } from "react-router-dom";

import Movies from "@/pages/Movies/Movies";
import MoviesDetail from "@/pages/Movies/MoviesDetail";
import People from "@/pages/People/PeoplePage";
import NotFound from "@/pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/movie/:movieId" element={<MoviesDetail />} />
      <Route path="/person/:personId" element={<People />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
