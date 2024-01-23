import React from "react";
import Layout from "@/layouts/components/Layout";
import Container from "@/layouts/components/Container/Container";
import RegisterPage from "@/layouts/RegisterPage/RegisterPage";

const Register = () => {
  return (
    <Layout>
      <Container>
        <RegisterPage />
      </Container>
    </Layout>
  );
};

export default Register;
