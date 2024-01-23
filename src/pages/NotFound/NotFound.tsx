import React from "react";
// import { Link } from "react-router-dom";

import Layout from "@/layouts/components/Layout";
import Container from "@/layouts/components/Container/Container";
import NotFoundPage from "@/layouts/NotFoundPage/NotFoundPage";

const NotFound = () => {
  return (
    <Layout>
      <Container>
        <NotFoundPage />
      </Container>
    </Layout>
  );
};

export default NotFound;
