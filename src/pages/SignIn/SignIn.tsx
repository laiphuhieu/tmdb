import React from "react";
import Layout from "@/layouts/components/Layout";
import Container from "@/layouts/components/Container/Container";
import SignInPage from "@/layouts/SignInPage/SignInPage";

const SignIn = () => {
  return (
    <Layout>
      <Container>
        <SignInPage />
      </Container>
    </Layout>
  );
};

export default SignIn;
