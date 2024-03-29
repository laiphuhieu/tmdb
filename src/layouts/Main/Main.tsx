import React from "react";

import New from "./New/New";
import Trending from "./Trending/Trending";
import Trailers from "./Trailers/Trailers";
import Popular from "./Popular/Popular";
import Leaderboard from "./Leaderboard/Leaderboard";


const Main = () => {
  return (
    <main className="w-[100%] flex justify-center flex-wrap mt-[64px] content-start bg-[#fff]">
      <New />
      <Trending />
      <Trailers />
      <Popular />
      <Leaderboard />
    </main>
  );
};

export default Main;
