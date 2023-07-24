import React from "react";

import New from "./New/New";
import Trending from "./Trending/Trending";
import Trailers from "./Trailers/Trailers";

const Body = () => {
  return (
    <main className="w-[100%] flex justify-center flex-wrap mt-[64px] content-start bg-[#fff]">
      <New />
      <Trending />
      <Trailers />
    </main>
  );
};

export default Body;
