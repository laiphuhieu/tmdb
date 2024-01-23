import React from "react";
import { Routes, Route } from "react-router-dom";

import Movies from "@/pages/Movies/Movies";
import MoviesDetail from "@/pages/Movies/MoviesDetail";
import People from "@/pages/People/PeoplePage";
import NotFound from "@/pages/NotFound/NotFound";
import Watchlist from "@/pages/Watchlist/Watchlist";
import SignIn from "@/pages/SignIn/SignIn";
import Register from "@/pages/Register/Register";
import ResetPassword from "@/pages/ResetPassword/ResetPassword";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/movie/:movieId" element={<MoviesDetail />} />
      <Route path="/person/:personId" element={<People />} />
      <Route path="/watchlist" element={<Watchlist />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
