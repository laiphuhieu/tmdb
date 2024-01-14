import React from "react";

import Layout from "@/layouts/components/Layout";
import Container from "@/layouts/components/Container/Container";
import WatchlistPage from "@/layouts/WatchlistPage/WatchlistPage";

const Watchlist = () => {
  return (
    <Layout>
      <Container>
        <WatchlistPage />
      </Container>
    </Layout>
  );
};

export default Watchlist;
