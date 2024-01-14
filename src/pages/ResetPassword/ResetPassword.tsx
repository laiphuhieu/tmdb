import React from "react";
import Layout from "@/layouts/components/Layout";
import Container from "@/layouts/components/Container/Container";
import ResetPasswordPage from "@/layouts/ResetPasswordPage/ResetPasswordPage";

const ResetPassword = () => {
  return (
    <Layout>
      <Container>
        <ResetPasswordPage />
      </Container>
    </Layout>
  );
};

export default ResetPassword;
